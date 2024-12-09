export const validateForm = (formData) => {
    const errors = {};
  
    // Validate firstName (chỉ chứa chữ cái)
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      errors.firstName = "First name must contain only letters.";
    }
  
    // Validate lastName (chỉ chứa chữ cái)
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
      errors.lastName = "Last name must contain only letters.";
    }
  
    // Validate email (định dạng hợp lệ)
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }
  
    // Validate phone (đủ độ dài, chỉ chứa số)
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone number must contain only digits.";
    } else if (formData.phone.length < 10) {
      errors.phone = "Phone number must be at least 10 digits.";
    }
  
    // Validate password (ít nhất 6 ký tự)
    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
  
    // Validate agree (đồng ý điều khoản)
    if (!formData.agree) {
      errors.agree = "You must agree to the Terms of Service.";
    }
  
    return errors;
  };
  