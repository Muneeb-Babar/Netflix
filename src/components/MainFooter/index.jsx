
import './app.css'


const MainFooter = () => {
    return (
        <div>
            <div className='main-Footer'>
            <h6 className='container' style={{color:'lightgrey'}}>Questions? Contact us.</h6>
                <div className='conteiner main-inner-footer'>
                <div>
                    <div>FAQ</div>
                    <div>Investor Relations</div>
                    <div>Privacy</div>
                    <div>Speed Test</div>
                </div>
                <div>
                <div>Help Center</div>
                <div>Jobs</div>
                <div>Cookie Preferences</div>
                <div>Legal Notices</div>
                </div>
                <div>
                <div>Account</div>
                <div>Ways to Watch</div>
                <div>Corporate Information</div>
                <div>Only on Netflix</div>
                </div>
                <div>
                <div>Media Center</div>
                <div>Terms of Use</div>
                <div>Contact Us</div>
                </div>
                </div>
                <div className='container'>
                <select style={{padding:'3px'}}>
                        <option value={''}>English</option>
                        </select>
                        <div style={{paddingTop:'20px'}}>Netflix Pakistan</div>
                        </div>
            </div>
        </div>
    )
}

export default MainFooter
