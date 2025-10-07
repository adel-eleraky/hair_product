import React, { useState } from 'react'
import "./Home.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';



function Home() {


    let [submit, setSubmit] = useState("")
    let navigate = useNavigate()

    const sheetUrl = "https://script.google.com/macros/s/AKfycbx4Q_kwVwZ-2fiEkzihYWOjz_sre-tf7MDqEbo2ZNawBGFoW_hPjJn1xOuPZEzeMVLFKw/exec"
    const validationSchema = Yup.object({
        name: Yup.string().required("الاسم مطلوب"),
        phone: Yup.string()
            .matches(/^(010|011|012|015)\d{8}$/, "يجب أن يكون رقم الهاتف المصري صحيحًا ويبدأ بـ 010 أو 011 أو 012 أو 015")
            .required("رقم الهاتف مطلوب"),
        // address: Yup.string().required('ادخل عنوانك - محافظتك - منطقة - اسم شارع - علامة مميزة'),
        // offer: Yup.string().required("برجاء اختيار العرض أو العبوة فقط"),

    });

    return (
        <>
            <div className="py-4 text-center bg-dark text-white fs-3 fw-bold">
                💰 سعر العبوة: <span className="text-warning">380 جنيه</span> | بدلا من 550 جنيه
            </div>
            <div className="first-section">
                <div className="row">
                    <div className="col-12 col-md-6 first-col ps-0">
                        <div className='text-center text-white position-relative' >
                            <img src="img/product_hair.jpg" alt="" className="img-fluid w-100 header-img" style={{ height: "550px" }} />
                        </div>
                        <div className='py-5 bottom-sec' >
                            <a href="#form" className="btn w-25 d-block m-auto mb-3 py-2 px-3 rounded bg-dark text-white fs-3 fw-bold mt-5 order-btn"> اطلب الان <i className="fa-solid fa-cart-shopping"></i></a>

                            <p className="m-auto text-center  mb-3 text-white p-4 fw-bold fs-3 rounded" >   وداعا للصلع الوراثى و تساقط الشعر <br /> Green  Mari منتج فعال لمحاربة تساقط الشعر </p>
                            <p className="w-75 m-auto text-center bg-dark mb-3 text-white p-4 fw-bold fs-3 rounded" > يقوى بصيلات الشعر و يحفز نمو الشعر الجديد </p>
                            <p className="w-75 m-auto text-center mb-3 text-white p-4 fw-bold fs-3 rounded"> يمنع التساقط و يعالج الفراغات فى فروة الرأس </p>
                            <p className="w-75 m-auto text-center bg-dark mb-3 text-white p-4 fw-bold fs-3 rounded" > يغذى الشعر بتركيبة غنية بالفيتامنيات و المغذيات الطبيعية </p>
                            <p className="w-75 m-auto text-center mb-3 text-white p-4 fw-bold fs-3 rounded"> مناسب لجميع انواع الشعر و امن تماما على فروة الرأس </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 second-col" style={{ paddingTop: "100px !important" }}>
                        <div className="text-center ">
                            <div className="main-title text-white fw-bold fs-3 py-2 px-3">
                                لا تتردد في طلب المنتج لاستعادة شبابك
                            </div>
                        </div>

                        <div className="container container-custom mt-4 mx-auto">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="box mb-5 border rounded">
                                        <div className=' text-white box-title rounded bg-dark py-3 fs-3 fw-bold'> نتائج الاسبوع الاول </div>
                                        <div className='bg-transparent text-dark py-3 fs-3'> تقليل ملحوظ فى تساقط الشعر </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box mb-5 border rounded">
                                        <div className=' text-white box-title rounded bg-dark py-3 fs-3 fw-bold'> نتائج الاسبوع الثانى </div>
                                        <div className='bg-transparent text-dark py-3 fs-3'> تحفيز نمو الشعر الجديد </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box mb-5 border rounded">
                                        <div className=' text-white box-title rounded bg-dark py-3 fs-3 fw-bold'> خلال 30 يوم </div>
                                        <div className='bg-transparent text-dark py-3 fs-3'> استعادة الكثافة الطبيعية و زيادة قوة الشعر </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border mt-5 py-4 rounded fw-bold fs-1 position-relative">
                                <span className="position-absolute bg-white caution"> تنويه </span>
                                المنتج طبيعى 100% و خالى من المواد الكيميائية الضارة
                            </div>
                            <a href="#form" className="btn py-2 px-3 rounded bg-dark text-white fs-3 fw-bold mt-5 order-btn"> اطلب الان <i className="fa-solid fa-cart-shopping"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-section">
                <div className="row align-item-center">
                    <div className="col-12 col-md-6 first-col">
                        <h2 className='w-75 m-auto my-5'> لماذا يثق 90% من العملاء فى هذا المنتج ؟ </h2>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <p> يحتوى على خلاصة المكونات الطبيعية التى تعيد انبات الشعر </p>
                                <p> يعزز تدفق الدم الى فروة الرأس لتحفيز البصيلات الخاملة </p>
                                <p> موصى به من قيل خبراء العناية بالشعر </p>
                            </div>
                            <div className="col-12 col-md-6"> <img src="img/product_hair-removebg-preview.png" alt="" className="img-fluid" style={{ height: "550px" }} /> </div>
                            <a href="#form" className="btn w-25 d-block m-auto mb-3 py-2 px-3 rounded bg-dark text-white fs-3 fw-bold mt-5 order-btn"> اطلب الان <i className="fa-solid fa-cart-shopping"></i></a>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 second-col">
                        {/* <img src="img/top-work.webp" alt="" className="img-fluid" /> */}
                        <div className="content text-white">
                            <h2 className='text-center mb-5 pt-5'> طريقة الاستخدام </h2>
                            <div className='px-5 py-3'>
                                <i className="fa-solid fa-1 rounded-circle border p-3 ms-2"></i> <span className='fw-bold fs-3'> غسل فروة الرأس جيدا </span>
                                <p className='mt-3'> - اغسل شعرك بالماء الفاتر و الشامبو المناسب لنوع شعرك  </p>
                                <p> - جفف رأسك بلطف و بمنشفة ناعمة قبل تطبيق المنتج </p>
                            </div>
                            <div className='px-5 py-3'>
                                <i className="fa-solid fa-2 rounded-circle border p-3 ms-2"></i> <span className='fw-bold fs-3'> تطبيق المنتج  </span>
                                <p className='mt-3'> - ضع كمية مناسبة من المنتج على الاماكن التى تعانى من التساقط او الصلع </p>
                                <p> - قم بتدليك فروة الرأس بحركات دائرية لمدة 2-3 دقائق لضمان امتصاصه جيدا </p>
                            </div>
                            <div className='px-5 py-3'>
                                <i className="fa-solid fa-3 rounded-circle border p-3 ms-2"></i> <span className='fw-bold fs-3'> الاستمرار على الروتين </span>
                                <p className='mt-3'> - استخدم المنتج مرتين يوميا ( صباحا و مساءا  ) للحصول على افضل النتائج </p>
                                <p> - لا تغسل شعرك مباشرة بعد التطبيق , و اتركه ليعمل لمدة لا تقل عن 6 ساعات </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-section">
                <div className="row">
                    <div className="col-12 col-md-6 first-col">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="price py-2 px-4 fw-bold fs-1 m-auto bg-white rounded mt-5 text-center" >
                                    السعر <br /> 380
                                    <span className='d-block text-white bg-dark rounded px-2 mt-2' > <del>بدلا من 550 </del> </span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6"><img src="img/product_hair-removebg-preview.png" alt="" className="img-fluid" /></div>
                        </div>

                        <p className='text-white bg-dark p-2 rounded fw-bold fs-3 m-auto mt-5' style={{ width: "fit-content" }}> الشحن مجانى لجميع المحافظات  </p>
                        <p className='text-dark bg-white rounded mb-3 py-2 px-3 fw-bold fs-3 m-auto mt-4' style={{ width: "fit-content" }}> الدفع عند استلام المنتج </p>
                        {/* <div className="price py-2 px-4 fw-bold fs-1 m-auto bg-white rounded my-5 text-center">
                            العبوتين و عليهم عبوة هدية <br />  765 جنيه
                            <span className='d-block text-white bg-dark rounded px-2 mt-2'> <del>بدلا من 1650</del> </span>
                        </div> */}
                    </div>
                    <div className="col-12 col-md-6">
                        <p className='text-dark text-center p-4 fs-5 fw-bold mt-5 fw-bold m-auto' style={{ width: "fit-content" }}> سياسة الأسترجاع فى حالة عدم رضائك عن المنتج ضمان استرجاع خلال 14 يوم </p>
                        <Formik
                            initialValues={{ name: "", phone: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                setSubmit("submitting")
                                console.log("Form Submitted:", values);
                                fetch(sheetUrl, {
                                    method: "POST",
                                    mode: "no-cors",  // <--- This bypasses CORS but does not return a response
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(values),
                                })
                                    .then(() => {
                                        setSubmit("submitted")
                                        toast.success('تم تسجيل بياناتك بنجاح', {
                                            position: "top-center",
                                            className: "toast-success",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: false,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });
                                        navigate("completed")
                                    })
                                    .catch(error => {
                                        setSubmit("submitted")
                                        toast.error(`${error}`, {
                                            position: "top-center",
                                            className: "toast-error",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: false,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });
                                    });
                            }}
                        >
                            {({ handleSubmit }) => (
                                <Form
                                    className="needs-validation w-75 m-auto mt-5 shadow p-5"
                                    noValidate
                                    onSubmit={handleSubmit}
                                    id='form'
                                >
                                    <h2 className="text-center text-white mb-5">
                                        سجل بياناتك الآن وسوف نقوم بالتواصل معكم بكل التفاصيل قبل شحن المنتج
                                    </h2>

                                    {/* Name Field */}
                                    <div className="mt-3">
                                        <div className="input mb-3">
                                            <label htmlFor="name" className="form-label fw-bold mb-2">
                                                الاسم بالكامل
                                            </label>
                                            <div className="input-group has-validation ">
                                                <span className="input-group-text rounded-0 rounded-end">
                                                    <i className="fa-solid fa-user p-2"></i>
                                                </span>
                                                <Field
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control rounded-0 rounded-start p-2"
                                                    placeholder="ادخل اسمك بالكامل"
                                                />
                                            </div>
                                            <ErrorMessage name="name" component="div" className="text-danger mb-3" />
                                        </div>

                                        {/* Phone Field */}
                                        <div className="input">
                                            <label htmlFor="phone" className="form-label fw-bold mb-2">
                                                رقم التليفون
                                            </label>
                                            <div className="input-group has-validation ">
                                                <span className="input-group-text rounded-0 rounded-end">
                                                    <i className="fa-solid fa-phone p-2"></i>
                                                </span>
                                                <Field
                                                    type="text"
                                                    id="phone"
                                                    maxLength="11"
                                                    name="phone"
                                                    className="form-control rounded-0 rounded-start p-2"
                                                    placeholder="ادخل رقم تليفونك"
                                                />
                                            </div>
                                            <ErrorMessage name="phone" component="div" className="text-danger mb-3" />
                                        </div>
                                        {/* <div className="input mt-3">
                                            <label htmlFor="address" className="form-label fw-bold mb-2">
                                                العنوان
                                            </label>
                                            <div className="input-group has-validation ">
                                                <span className="input-group-text rounded-0 rounded-end">
                                                    <i className="fa-solid fa-location-dot p-2"></i>
                                                </span>
                                                <Field
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    className="form-control rounded-0 rounded-start p-2"
                                                    placeholder=" ادخل عنوانك: محافظة - منطقة - اسم الشارع - علامة مميزة "
                                                />
                                            </div>
                                            <ErrorMessage name="address" component="div" className="text-danger mb-3" />
                                        </div>
                                        <div className="input mt-3">
                                            <label htmlFor="offer" className="form-label fw-bold mb-2">اختار العرض</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text rounded-0 rounded-end">
                                                    <i className="fa-solid fa-box-open p-2"></i>
                                                </span>
                                                <Field
                                                    as="select"
                                                    id="offer"
                                                    name="offer"
                                                    className="form-control rounded-0 rounded-start p-2"
                                                >
                                                    <option value="">اختر</option>
                                                    <option value="double"> اشترى العرض ( عبوتين + واحدة مجانا ) </option>
                                                    <option value="single">اشترى عبوة فقط</option>
                                                </Field>
                                            </div>
                                            <ErrorMessage name="offer" component="div" className="text-danger mb-3" />
                                        </div> */}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn order-btn py-2 px-3 rounded text-white m-auto d-block fs-3 fw-bold mt-5"
                                    >
                                        {submit == "submitting" ?
                                            "جارى التسجيل" : "اطلب الان"}
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <footer className='py-3 d-flex justify-content-center'>
                <div className="container text-center py-3"></div>
                <div className="container text-center py-3">
                    <div className="row">
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0"><img src="img/extra-1.PNG" alt="" className="img-fluid" /></div>
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0"><img src="img/extra-2.PNG" alt="" className="img-fluid" /></div>
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0"><img src="img/extra-3.PNG" alt="" className="img-fluid" /></div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    className="d-flex"
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </footer>
        </>
    )
}

export default Home
