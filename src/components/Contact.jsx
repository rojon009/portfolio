import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineSend, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';
const Contact = () => {

    const [spin, setSpin] = useState(false)

    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        setSpin(true);
        emailjs.sendForm('service_lylx8w5', 'template_q5dqwcp', e.target, 'user_DXYUyBMhJG7kGtRQ2ecUM')
            .then((result) => {
                console.log(result.text);
                if(result.text === 'OK'){
                    setSpin(false);
                    setFormInfo({
                        name: '',
                        email: '',
                        message: ''
                    })
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="dark:text-white">
            <h2 className="text-2xl font-medium pb-5">Leave a Message</h2>
            <form onSubmit={hanldeSubmit} className="flex flex-col space-y-2">
                <input value={formInfo.name} onChange={(e) => handleChange(e)} required className="border dark:bg-dark-400 border-grish  dark:border-white outline-none dark:focus:border-grish focus:border-gray-600 px-3 py-2 rounded-md" type="text" name="name" placeholder="Your name" />
                <input value={formInfo.email} onChange={handleChange} required className="border dark:bg-dark-400 border-grish  dark:border-white outline-none dark:focus:border-grish focus:border-gray-600 px-3 py-2 rounded-md" type="email" name="email" id="email" placeholder="Your Email" />
                <textarea value={formInfo.message} onChange={handleChange} required className="border dark:bg-dark-400 border-grish  dark:border-white outline-none dark:focus:border-grish focus:border-gray-600 px-3 py-2 rounded-md" name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <motion.button whileHover={{scale: 1.03}} whileTap={{scale:1}} className="bg-gradient-to-r from-grish to-blue-500 w-32 px-5 rounded-md py-2 flex items-center justify-center text-white" type="submit">{spin && <AiOutlineLoading3Quarters className="animate-spin mr-3" size={20} />} Send <AiOutlineSend className="ml-3" /></motion.button>
            </form>
        </div>
    );
};

export default Contact;