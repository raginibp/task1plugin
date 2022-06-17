
$(document).ready(function() {
  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) ||  /^[a-z]+$/i.test(value);
  }, "Letters only please");

  jQuery.validator.addMethod('zipcode', function(value, element) {
    return this.optional(element) || !!value.trim().match(/^\d{6}(?:[-\s]\d{4})?$/);
  }, 'Invalid zip code');

  jQuery.validator.addMethod('Phone', function(value, element) {
    return this.optional(element) || !!value.trim().match(/^\d{10}(?:[-\s]\d{4})?$/);
  }, 'Invalid phone number');

  $("#basic-form").validate({
    rules: {
    fname : {
    required: true,
    lettersonly: true
    
    },
    lname : {
      required: true,
      lettersonly: true
      },
    adress: {
    required: true,
    lettersonly:true
    },
    zip: {
    required: true,
    zipcode: true
    },
   
    phone: {
    required:true,
    Phone:true
    },
  
    email: {
      required:true,
      email:true
      },
    
     feedback : {
        required:true,
        lettersonly:true
        },
        Suggestion : {
          required:true,
          lettersonly:true
          },

          Gender:{
            required:true
          },
        },

message:{
  fname : {
    required:" name required"
  },
  lname : {
    required:"surname required"
  },
  adress: {
    required: " Adress required"
  },
  zip: {
    required: "Zip code required"
  },
  phone: {
    required:"Phone number required"
  },
  email: {
    required:"Email required"
    },
    feedback : {
      required:"Feedback required"
      },
      Suggestion : {
        required:"Suggestion required"
        },
        Gender:{
          required:"Gender required"
        },

},
          errorPlacement: function(error, element) 
          {
              if ( element.is(":radio") ) 
              {
                  error.appendTo( element.parents('.container') );
              }
              else 
              { // This is the default behavior 
                  error.insertAfter( element );
              }
           }
         
         
  });
});
