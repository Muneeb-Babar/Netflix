import './app.css'


const Footer = () => {
    return (
        <div>
            <div className='Sub-Footer'>
            <h6 className='container' style={{color:'lightgrey'}}>Questions? Contact us.</h6>
                <div className='conteiner inner-footer'>
                <div>
                    <div>FAQ</div>
                    <div>Cookie Preferences</div>
                    <div style={{marginTop:'8px'}}><select style={{padding:'3px'}}>
                        <option value={''}>English</option>
                        </select></div>
                </div>
                <div>
                <div>Help Center</div>
                <div>Corporate Information</div>
                </div>
                <div>
                <div>Terms of Use</div>
                </div>
                <div>
                <div>Privacy</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
