import axios from 'axios';
import React, { useState } from 'react';


const MyForm = ({isRu}) => {

    const [text, setText] = useState('')
    const [email, setemail] = useState('')
    const [subject, setsubject] = useState('')
    const [name, setname] = useState('')

    const submitData = () => {
        if(!text || !email || !subject || !name){
            alert(isRu ? "Форма должна быть заполнена *" : "The form must be filled out *")
        }else{
            axios({
                url: "https://process-fruit.herokuapp.com/mail/send",
                method: "POST",
                data:{
                    gmail: email,
                    text,
                    subject,
                    name
                    }
            }).then(res => {
                console.log("res", res);
            })
        }
    }
    

    return (
        <div className="contact-form">
            <input type='hidden' name='form-name' value='contact-form' />
            <div className="messages"></div>
            <div className="controls">
            <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                    <input onChange={(e) => setname(e.target.value)} id="form_name" type="text" placeholder={isRu ? "Имя *" : "Name *"} />
                    <div className="help-block with-errors"></div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                    <input type="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder={isRu ? "Почта *" : "Mail *"}/>
                    <div className="help-block with-errors"></div>
                </div>
                </div>
                <div className="col-lg-12">
                <div className="form-group">
                    <input id="form_subject" type="text" onChange={(e) => setsubject(e.target.value)} placeholder={isRu ? "Предмет" : "Subject"} />
                </div>
                </div>
                <div className="col-lg-12 form-group">
                <textarea onChange={(e) => setText(e.target.value)} className="form-control" placeholder={isRu ? "Введите ваше сообщение" : "Type Your Message"} rows="4" />
                <div className="help-block with-errors"></div>
                </div>
                <div className="col-lg-12 text-center">
                <button onClick={submitData} value={text} className="bttn">{isRu ? "Отправить" : "Send Message"}</button>
                </div>
            </div>
            </div>
    </div>
    )
}
export default MyForm;