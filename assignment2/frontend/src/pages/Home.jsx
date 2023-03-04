import React, { useEffect, useState } from 'react'
import '../styles/home.css'

export default function Home() {

    const [data, setDate] = useState({
        title:"",
        body:""
    })
    const [notes, setNotes] = useState([])


    useEffect(() => {
        getData()
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.title) return
        setNotes([...notes, { title: data.title, body:data.body, time: new Date().toDateString() }])

        postData()
    }

    const getData = async () => {
        try {
            let res = await fetch('https://bold-polarized-calliandra.glitch.me')
            res = await res.json();
            setNotes(res)
        } catch (e) {
            console.log(e.message);
        }
    }

    const postData = async () => {
        try {

            let res = await fetch('https://bold-polarized-calliandra.glitch.me', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: data.title, body:data.body, time: new Date().toDateString() })
            })
            res = await res.json();
            setNotes(res);
        } catch (e) {
            console.log(e)
        }

    }

    const handleDelete = async (id) => {
        try {

            let res = await fetch('https://bold-polarized-calliandra.glitch.me/' + id, {
                method: 'DELETE'
            })
            res = await res.json();
            setNotes(res);
        } catch (e) {
            console.log(e)
        }
    }

    const handleupdate = async (e) => {
        setDate({
            ...data,
            [e.name]:e.value
        })
    }

    return (
        <div id='home'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => handleupdate(e.target)} name="title" placeholder='Add a title...' />
                <input onChange={(e) => handleupdate(e.target)} name="body" placeholder='Add a body...' />
                <input type="submit" />
            </form>

            <div id='container'>

                {
                    notes && notes.map((ele, i) => {
                        return <div className='child' key={i}>
                            <p style={{ textAlign: 'start', fontSize: '22px' }}>{ele.title}</p>
                            <p style={{ textAlign: 'start', fontSize: '22px' }}>{ele.body}</p>
                            <div className='delBtn' >
                                <p style={{ color: 'gray' }}>{ele.time}</ p>
                                <img onClick={() => handleDelete(ele._id)} width={'20px'} height='20px' src='https://cdn-icons-png.flaticon.com/512/484/484611.png' alt='del' />
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}
