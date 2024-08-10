import React, { useState } from 'react';
import '../../assets/css/PartnerForm.css';

const BusinessRegistrationForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    isApiPartner: '',
    logo: null,
    businessDescription: '',
    gstin: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    state: '',
    emailAddress: '',
    ownerName: '',
    mobileNumber: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOtpSend = () => {
    // Logic to send OTP
    setOtpSent(true);
  };

  const handleOtpVerify = () => {
    // Logic to verify OTP
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data logic here
  };

  return (
    <form onSubmit={handleSubmit} className="business-registration-form">
        <div className="Header"> <h1>Partner With Us</h1></div>
      {/* <h1>Partner With Us</h1> */}
      <div className="form-container">
        <div className="section">
          <h2>We will be in touch to assist you</h2>
          <div className="form-group">
            <label>
              Email Address *
              <input 
                type="email" 
                name="emailAddress" 
                value={formData.emailAddress} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Shop Owner's Name *
              <input 
                type="text" 
                name="ownerName" 
                value={formData.ownerName} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Mobile Number *
              <input 
                type="tel" 
                name="mobileNumber" 
                value={formData.mobileNumber} 
                onChange={handleChange} 
                required 
              />
              <button type="button" onClick={handleOtpSend}>
                Send OTP
              </button>
            </label>
          </div>

          {otpSent && (
            <div className="form-group">
              <label>
                Enter OTP
                <input 
                  type="text" 
                  value={otp} 
                  onChange={(e) => setOtp(e.target.value)} 
                  required 
                />
                <button type="button" onClick={handleOtpVerify}>
                  Verify
                </button>
              </label>
            </div>
          )}

          <h2>Tell us about your Business</h2>

          <div className="form-group">
            <label>
              Business Name *
              <input 
                type="text" 
                name="businessName" 
                value={formData.businessName} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Your website URL (optional)
              <input 
                type="url" 
                name="websiteUrl" 
                value={formData.websiteUrl} 
                onChange={handleChange} 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Business / Brand Logo (jpg, jpeg, png files up to 5 MB allowed) *
              <input 
                type="file" 
                name="logo" 
                onChange={handleChange} 
                accept="image/jpeg, image/png, image/jpg" 
                required 
              />
              <span>{formData.logo ? formData.logo.name : 'No file chosen'}</span>
            </label>
          </div>

          <div className="form-group">
            <label>
              Business Description * (0/500)
              <textarea 
                name="businessDescription" 
                value={formData.businessDescription} 
                onChange={handleChange} 
                maxLength="500" 
                required 
              />
            </label>
          </div>
        </div>

        <div className="section">
          <h2>Let us confirm your GSTIN</h2>
          <div className="form-group">
            <label>
              GSTIN of Business *
              <input 
                type="text" 
                name="gstin" 
                value={formData.gstin} 
                onChange={handleChange} 
                required 
              />
              <button type="button" onClick={handleOtpSend}>
                Validate
              </button>
            </label>
          </div>

          {otpSent && (
            <div className="form-group">
              <label>
                Enter OTP
                <input 
                  type="text" 
                  value={otp} 
                  onChange={(e) => setOtp(e.target.value)} 
                  required 
                />
                <button type="button" onClick={handleOtpVerify}>
                  Verify
                </button>
              </label>
            </div>
          )}

          <h2>Tell us your Business Address</h2>
          <div className="form-group">
            <label>
              Office Address - Line 1 *
              <input 
                type="text" 
                name="addressLine1" 
                value={formData.addressLine1} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Office Address - Line 2 *
              <input 
                type="text" 
                name="addressLine2" 
                value={formData.addressLine2} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              PIN Code *
              <input 
                type="text" 
                name="pinCode" 
                value={formData.pinCode} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              City
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              State
              <input 
                type="text" 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
              />
            </label>
          </div>
        </div>
      </div>

      <div className="submit-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BusinessRegistrationForm;
