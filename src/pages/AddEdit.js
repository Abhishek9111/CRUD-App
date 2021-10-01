import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import fireDb from '../firebase'
import './AddEdit.css'
import {toast} from 'react-toastify'


const initialState ={
    name:" ",
    email:" ",
    contact:" ",
};

const AddEdit = () => {

    const [state,changeState] = useState(initialState)
    const[data,setData] = useState({})

    const  {name,email,contact} = state;
    const history = useHistory()

    const {id} = useParams()

    useEffect(()=>{
        fireDb.child('contact').on('value',(snapshot)=>{
            if(snapshot.value!== null){
                setData({...snapshot.val()})
            }
            else{
                setData({})
            }
        })
        
        return()=>{
            setData({})
        }
    },[id])

    useEffect(()=>{
        if(id){
            changeState({...data[id]})
        }else{
            changeState({...initialState})
        }

        return()=>{
            changeState({...initialState})
        }
    },[id,data])

    const handleInputChange=(e)=>{
        const{name,value} = e.target;
        changeState({...state, [name]:value})    
    }
     
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("Please fill all the field to proceed :-)")
        }else{
            if(!id){
            fireDb.child('contact').push(state,(err)=>{
                if(err){
                    toast.error(err)
                }
                else{
                    toast.success('The following data has been added into the form')
                }
            })
            setTimeout(()=> history.push('/'),500)
        }else{
            fireDb.child(`contact/${id}`).set(state,(err)=>{
                if(err){
                    toast.error(err)
                }
                else{
                    toast.success('The following data has been updated into the form')
                }
            })
            setTimeout(()=> history.push('/'),500)
        }
    }
    }

    return (
        <div>
            <div style={{marginTop:'100px'}}>
                <form style={{margin:'auto',padding:'15px',maxWidth:'400px',alignContent:'center'}} onSubmit={handleSubmit}>

                    
                    <label htmlFor='name'>Name</label>
                    <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    placeholder="Enter your name" 
                    value={name || ''} 
                    onChange={handleInputChange}/>

                    <label htmlFor='email'>Email</label>
                    <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='Enter the email' 
                    value={email || ''} 
                    onChange={handleInputChange}/>

                    <label htmlFor='contact'>Contact</label>
                    <input 
                    type='number' 
                    id='contact' 
                    name='contact' 
                    placeholder='Enter the number' 
                    value={contact || ''} 
                    onChange={handleInputChange}/>


                    <input 
                    type='submit' 
                    value={id?'Update':'Save'}/>
                </form>

            </div>
        </div>

    )
}

export default AddEdit
