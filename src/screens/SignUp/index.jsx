
import Footer from '../../components/Footer'
import SignForm from '../../components/Form'
import './app.css'

const SignUp = () => {
    return (
        <>
            <div className="main-container">
                <div className='lowColorSign'>
                <div className='container1'>
                    <div className='container' >
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawRe0teFSEAWgdSzNp7s-E_XRl_p61unPKRTJi4keEg&s' style={{ marginTop: '20px', height: '150px', width: '250px', mixBlendMode: 'darken' }} className='hide' />
                        <div className='signForm' >
                            <SignForm />
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div style={{width:'100%'}}>
                        <Footer />
                    </div>
        </>
    )
}

export default SignUp
