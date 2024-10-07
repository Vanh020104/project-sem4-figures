// import React, { useState } from 'react';

// const ForgotPass = () => {
//     const [email, setEmail] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault(); // Ngăn chặn hành vi mặc định của form

//         try {
//             const response = await fetch('http://localhost:8080/api/v1/auth/forgot-password', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: email,
//                     platform: 'WEB',
//                 }),
//             });

//             if (response.ok) {
//                 alert('Chúng tôi đã gửi mail cho bạn.');
//             } else {
//                 alert('Có lỗi xảy ra, vui lòng thử lại.');
//             }
//         } catch (error) {
//             alert('Có lỗi xảy ra, vui lòng thử lại.');
//         }
//     };
//     return (
//         <>
//             {/* Preloader*/}
//             <div id="preloader">
//                 <div className="pyramid-loader">
//                     <div className="wrapper">
//                         <span className="side side1" />
//                         <span className="side side2" />
//                         <span className="side side3" />
//                         <span className="side side4" />
//                         <span className="shadow" />
//                     </div>
//                 </div>
//             </div>
//             {/* Back To Top Start */}
//             <a href="#main-wrapper" id="backto-top" className="back-to-top">
//                 <i className="fas fa-angle-up" />
//             </a>
//             {/* Main Wrapper Start */}
//             <div id="main-wrapper" className="main-wrapper overflow-hidden">
//                 {/* Header Area Start */}
//                 <header className="large-screens">
//                     <div className="container">
//                         <nav className="navbar navbar-expand-lg">
//                             <div className="collapse navbar-collapse justify-content-between">
//                                 <a className="navbar-brand" href="/">
//                                     <img alt="logo" src="assets/media/logo.png" />
//                                 </a>
//                             </div>
//                         </nav>
//                     </div>
//                 </header>
//                 <header className="small-screen bg-dark-black">
//                     <div className="container">
//                         <div className="mobile-menu">
//                             <div>
//                                 <a className="navbar-brand" href="index-2.html">
//                                     <img alt="" src="assets/media/logo.png" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//                 {/* Header Area end */}
//                 {/* 404 Area Start  */}
//                 <div className="login-page">
//                     <div className="row">
//                         <div className="col-xl-6">
//                             <div className="row">
//                                 <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-md-8 offset-md-2">
//                                     <div className="text-block text-center">
//                                         <h3 className="mb-32">Forgot Password</h3>
//                                         <p style={{ color: 'white', marginBottom: 20 }}>
//                                             Please enter the email address you used to register your account. We'll send
//                                             you an email with a link to reset your password. If you don't receive the
//                                             email, check your spam folder or try again in a few minutes.
//                                         </p>

//                                         <form className="form-validator" onSubmit={handleSubmit}>
//                                             <div className="mb-30">
//                                                 <input
//                                                     type="email"
//                                                     className="form-control"
//                                                     id="login-email"
//                                                     name="email"
//                                                     required
//                                                     placeholder="Email"
//                                                     value={email}
//                                                     onChange={(e) => setEmail(e.target.value)}
//                                                 />
//                                             </div>

//                                             <button type="submit" className="b-unstyle cus-btn primary w-100 mb-24">
//                                                 <i className="fa-regular fa-paper-plane"></i> Forgot Password
//                                             </button>
//                                         </form>
//                                         <div className="bottom-row">
//                                             <h6 style={{ color: 'white' }}>
//                                                 If you don’t have account?{' '}
//                                                 <a href="/register" className="color-primary">
//                                                     Register
//                                                 </a>
//                                             </h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xl-6">
//                             <div className="img-block">
//                                 <img src="assets/media/backgrounds/cs-main-img.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* 404 Area End  */}
//             </div>
//         </>
//     );
// };

// export default ForgotPass;

import React, { useState } from 'react';

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form default action

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    platform: 'WEB',
                }),
            });

            if (response.ok) {
                setShowModal(true); // Show the modal
            } else {
                alert('Có lỗi xảy ra, vui lòng thử lại.');
            }
        } catch (error) {
            alert('Có lỗi xảy ra, vui lòng thử lại.');
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {/* Preloader */}
            <div id="preloader">
                <div className="pyramid-loader">
                    <div className="wrapper">
                        <span className="side side1" />
                        <span className="side side2" />
                        <span className="side side3" />
                        <span className="side side4" />
                        <span className="shadow" />
                    </div>
                </div>
            </div>
            {/* Back To Top Start */}
            <a href="#main-wrapper" id="backto-top" className="back-to-top">
                <i className="fas fa-angle-up" />
            </a>
            {/* Main Wrapper Start */}
            <div id="main-wrapper" className="main-wrapper overflow-hidden">
                {/* Header Area Start */}
                <header className="large-screens">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse justify-content-between">
                                <a className="navbar-brand" href="/">
                                    <img alt="logo" src="assets/media/logo.png" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </header>
                <header className="small-screen bg-dark-black">
                    <div className="container">
                        <div className="mobile-menu">
                            <div>
                                <a className="navbar-brand" href="index-2.html">
                                    <img alt="" src="assets/media/logo.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header Area end */}
                {/* Forgot Password Area Start */}
                <div className="login-page">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-md-8 offset-md-2">
                                    <div className="text-block text-center">
                                        <h3 className="mb-32">Forgot Password</h3>
                                        <p style={{ color: 'white', marginBottom: 20 }}>
                                            Please enter the email address you used to register your account. We'll send
                                            you an email with a link to reset your password. If you don't receive the
                                            email, check your spam folder or try again in a few minutes.
                                        </p>

                                        <form className="form-validator" onSubmit={handleSubmit}>
                                            <div className="mb-30">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="login-email"
                                                    name="email"
                                                    required
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>

                                            <button type="submit" className="b-unstyle cus-btn primary w-100 mb-24">
                                                <i className="fa-regular fa-paper-plane"></i> Forgot Password
                                            </button>
                                        </form>
                                        <div className="bottom-row">
                                            <h6 style={{ color: 'white' }}>
                                                If you don’t have account?{' '}
                                                <a href="/register" className="color-primary">
                                                    Register
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="img-block">
                                <img src="assets/media/backgrounds/cs-main-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Forgot Password Area End */}

                {/* Modal */}
                {showModal && (
                    <div className="modal-backdrop">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 style={{ textAlign: 'center', marginLeft: 140 }} className="modal-title">
                                    Success
                                </h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span style={{ fontSize: 30 }}>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ marginBottom: 20 }}>
                                <p>We have sent an email to reset your password!</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    style={{ fontSize: 15, width: 100, height: 32 }}
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={closeModal}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    .modal-backdrop {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 9999;
                    }
                    .modal-content {
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        width: 400px;
                        max-width: 90%;
                    }
                    .modal-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .close {
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                    }
                    .modal-body {
                        margin-top: 10px;
                    }
                    .modal-footer {
                        display: flex;
                        justify-content: flex-end;
                    }
                `}</style>
            </div>
        </>
    );
};

export default ForgotPass;
