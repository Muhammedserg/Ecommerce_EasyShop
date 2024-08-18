class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  
  static VisitorDetails = this.BaseURL + "/getvisitor";
  static PostContact = this.BaseURL + "/postcontact";
  static AllCategoryDetails = this.BaseURL + "/Allcategory";

  static ProductListByRemark(remark) {
    return this.BaseURL + "/productListbyremark/" + remark;
  }

  static ProductListByCategory(category) {
    return this.BaseURL + "/ProductListbycategory/" + category;
  }

  static ProductListBySubCategory(category, subcategory) {
    return this.BaseURL + "/ProductListbysubcategory/" + category + "/" + subcategory;
  }

  static ProductDetails(code) {
    return this.BaseURL + "/productdetails/" + code;
  }
  
  static addToCart = this.BaseURL + "/addtocart";
  static UserLogin = this.BaseURL + "/login";
  static UserData = this.BaseURL + "/user";
  static UserRegister = this.BaseURL + "/register";
  static UserForgetPassword = this.BaseURL + "/forgetpassword";
  static UserResetPassword = this.BaseURL + "/resetpassword";

  static AddFavourite(product_code, email) {
    return this.BaseURL + "/favourite/" + product_code + "/" + email;
  }
}

export default AppURL;
