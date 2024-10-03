"use client"
import { log } from "console";
import { ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
function ContactUs() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        }, 
        onSubmit: (values) => {
            console.log("onSubmit", values);
        },
        validationSchema: yup.object({
            name: yup.string().required("Name is required"),
            email: yup.string().required("Email is required").email("Invalid email"),
            message: yup.string().required("Message is required")
        }) 
    })

    return <div className="mt-10 p-10 w-full border-4 flex justify-center">
        <form onSubmit = {formik.handleSubmit} action="#" className="p-10 flex gap-2 flex-col w-96">
            <h1 className="text-5xl mb-7 text-center font-segou font-bold text-gray-800">Contact Us</h1>
            <div className="flex flex-col gap-3">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="outline-none w-full h-11 rounded p-6" placeholder="Enter your name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.name ? <p className="text-orange-500">{formik.errors.name}</p> : null}
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" className="outline-none w-full h-11 rounded p-6" placeholder="Enter your email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email ? <p className="text-orange-500">{formik.errors.email}</p> : null}
                <label htmlFor="message">Leave us a few words:</label>
                <textarea name="message" id="message" className="outline-none w-full h-11 rounded p-6" placeholder="Enter your message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                {formik.errors.message ? <p className="text-orange-500">{formik.errors.message}</p> : null}
                <button className="text-white bg-orange-500 w-28 h-8 rounded" type="submit">Submit</button>
            </div>
        </form>
    </div>
}

export default ContactUs;
