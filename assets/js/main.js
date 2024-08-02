// Jquery Code Starts Here

(function ($) {
  "use strict";
  $(document).ready(function () {
    // aos init
    AOS.init({
      once: true,
     
      
    });

    //  address nice selector
    $(".address-input-wrapper select").niceSelect();
    // payment gateway
    $(".payment-expiry-wrapper select").niceSelect();
    // nice select
    $(".upload-form select").niceSelect();
    $(".filter-container select").niceSelect();
    
    // nice select for quantity in products details
    $(".choose-quantity-container select").niceSelect();


    //  owl carasoul
    $(".provider-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        `<svg class="icon icon-custom-left-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L3 12ZM7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071C9.09763 17.3166 9.09763 16.6834 8.70711 16.2929L7.29289 17.7071ZM8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.70711 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L8.70711 7.70711ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM2.29289 12.7071L7.29289 17.7071L8.70711 16.2929L3.70711 11.2929L2.29289 12.7071ZM3.70711 12.7071L8.70711 7.70711L7.29289 6.29289L2.29289 11.2929L3.70711 12.7071ZM21 11H3V13H21V11Z" fill="#C9CFCC"/>
</svg>`,
        `<svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 12L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L21 12ZM16.7071 6.29289C16.3166 5.90237 15.6834 5.90237 15.2929 6.29289C14.9024 6.68342 14.9024 7.31658 15.2929 7.70711L16.7071 6.29289ZM15.2929 16.2929C14.9024 16.6834 14.9024 17.3166 15.2929 17.7071C15.6834 18.0976 16.3166 18.0976 16.7071 17.7071L15.2929 16.2929ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V11ZM21.7071 11.2929L16.7071 6.29289L15.2929 7.70711L20.2929 12.7071L21.7071 11.2929ZM20.2929 11.2929L15.2929 16.2929L16.7071 17.7071L21.7071 12.7071L20.2929 11.2929ZM3 13H21V11H3V13Z" fill="#121715"/>
</svg>`,
      ],
      responsive: {
        0: {
          items: 1,
        },
        320:{
          items:1,
        },
        375:{ 
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1440: {
          items: 4,
        },
        1500: {
          items: 5,
        },
      },
    });

    $(".new-item-product-card-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1440: {
          items: 4,
        },
        1500: {
          items: 5,
        },
      },
    });
   

    // for dashboard purposes
    $(".new-item-product-card-slider-dashboard").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        `<svg class="icon icon-custom-left-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L3 12ZM7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071C9.09763 17.3166 9.09763 16.6834 8.70711 16.2929L7.29289 17.7071ZM8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.70711 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L8.70711 7.70711ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM2.29289 12.7071L7.29289 17.7071L8.70711 16.2929L3.70711 11.2929L2.29289 12.7071ZM3.70711 12.7071L8.70711 7.70711L7.29289 6.29289L2.29289 11.2929L3.70711 12.7071ZM21 11H3V13H21V11Z" fill="#C9CFCC"/>
</svg>`,
        `<svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 12L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L21 12ZM16.7071 6.29289C16.3166 5.90237 15.6834 5.90237 15.2929 6.29289C14.9024 6.68342 14.9024 7.31658 15.2929 7.70711L16.7071 6.29289ZM15.2929 16.2929C14.9024 16.6834 14.9024 17.3166 15.2929 17.7071C15.6834 18.0976 16.3166 18.0976 16.7071 17.7071L15.2929 16.2929ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V11ZM21.7071 11.2929L16.7071 6.29289L15.2929 7.70711L20.2929 12.7071L21.7071 11.2929ZM20.2929 11.2929L15.2929 16.2929L16.7071 17.7071L21.7071 12.7071L20.2929 11.2929ZM3 13H21V11H3V13Z" fill="#121715"/>
</svg>`,
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1440: {
          items: 4,
        },
        1500: {
          items: 5,
        },
      },
    });

    //  for announcement-slider-section

    $(".announcement-slider-section").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        `<svg class="icon icon-custom-left-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L3 12ZM7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071C9.09763 17.3166 9.09763 16.6834 8.70711 16.2929L7.29289 17.7071ZM8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.70711 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L8.70711 7.70711ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM2.29289 12.7071L7.29289 17.7071L8.70711 16.2929L3.70711 11.2929L2.29289 12.7071ZM3.70711 12.7071L8.70711 7.70711L7.29289 6.29289L2.29289 11.2929L3.70711 12.7071ZM21 11H3V13H21V11Z" fill="#C9CFCC"/>
</svg>`,
        `<svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 12L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L21 12ZM16.7071 6.29289C16.3166 5.90237 15.6834 5.90237 15.2929 6.29289C14.9024 6.68342 14.9024 7.31658 15.2929 7.70711L16.7071 6.29289ZM15.2929 16.2929C14.9024 16.6834 14.9024 17.3166 15.2929 17.7071C15.6834 18.0976 16.3166 18.0976 16.7071 17.7071L15.2929 16.2929ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V11ZM21.7071 11.2929L16.7071 6.29289L15.2929 7.70711L20.2929 12.7071L21.7071 11.2929ZM20.2929 11.2929L15.2929 16.2929L16.7071 17.7071L21.7071 12.7071L20.2929 11.2929ZM3 13H21V11H3V13Z" fill="#121715"/>
</svg>`,
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
        1440: {
          items: 3,
        },
        1500: {
          items: 3,
        },
      },
    });

    // for latest news

    $(".latest-news-slider-section").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        `<svg class="icon icon-custom-left-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L3 12ZM7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071C9.09763 17.3166 9.09763 16.6834 8.70711 16.2929L7.29289 17.7071ZM8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.70711 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L8.70711 7.70711ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM2.29289 12.7071L7.29289 17.7071L8.70711 16.2929L3.70711 11.2929L2.29289 12.7071ZM3.70711 12.7071L8.70711 7.70711L7.29289 6.29289L2.29289 11.2929L3.70711 12.7071ZM21 11H3V13H21V11Z" fill="#C9CFCC"/>
</svg>`,
        `<svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 12L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L21 12ZM16.7071 6.29289C16.3166 5.90237 15.6834 5.90237 15.2929 6.29289C14.9024 6.68342 14.9024 7.31658 15.2929 7.70711L16.7071 6.29289ZM15.2929 16.2929C14.9024 16.6834 14.9024 17.3166 15.2929 17.7071C15.6834 18.0976 16.3166 18.0976 16.7071 17.7071L15.2929 16.2929ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V11ZM21.7071 11.2929L16.7071 6.29289L15.2929 7.70711L20.2929 12.7071L21.7071 11.2929ZM20.2929 11.2929L15.2929 16.2929L16.7071 17.7071L21.7071 12.7071L20.2929 11.2929ZM3 13H21V11H3V13Z" fill="#121715"/>
</svg>`,
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
        1440: {
          items: 2,
        },
        1500: {
          items: 2,
        },
      },
    });
    
    // $(".category-slider").owlCarousel({
    //   loop: true,
    //   margin: 12,
    //   nav: false,
    //   dots: false,
    //   responsive: {
    //     0: {
    //       items: 1,
    //     },
    //     600: {
    //       items: 3,
    //     },
    //     1000: {
    //       items: 3,
    //     },
    //     1440: {
    //       items: 4,
    //     },
    //     1500: {
    //       items: 6,
    //     },
    //   },
    // });
    
    
  });
})(jQuery);

// JavaScript Dom Code Starts Here


document.addEventListener("DOMContentLoaded", function () {
  //================================= Bishal code starts here ==================================================
  
  // for tab slider in category ----buyer home
  // const category_slider = document.querySelector(".category-slider");
  // let is_dragging = false;
  // const dragging = (e) =>{
  //   if (!is_dragging) {
  //     return
  //   }
  //   category_slider.scrollLeft -= e.movementX
  // }
  // if (category_slider) {
  //  category_slider.addEventListener("mousemove", dragging)
  //  category_slider.addEventListener("mousedown", ()=> is_dragging =true)
  //  category_slider.addEventListener("mouseup", ()=> is_dragging =false)
  // }



  // for filter screen 
  const filterButton = document.querySelector(".filter-btn")
  const filterScreen = document.querySelector(".filter-screen")

  if(filterButton && filterScreen){
    filterButton.addEventListener("click", () => {
      filterScreen.classList.toggle("show");
    });
  }

// increment and decrement quantity

const incrementButton = document.querySelectorAll(".increment");
const decrementButton = document.querySelectorAll(".decrement");
if(incrementButton && decrementButton){

  incrementButton.forEach((inc_btn) => {
    inc_btn.addEventListener("click", () =>{
      let currentValue = parseInt(inc_btn.parentNode.querySelector('input').value);
      if(currentValue == 10){
        return
      }
      else{
        inc_btn.previousElementSibling.value = currentValue + 1;
      }
    })
  })
  decrementButton.forEach((dec_btn) => {
    dec_btn.addEventListener("click", () =>{
      let currentValue = parseInt(dec_btn.parentNode.querySelector('input').value);
     if (currentValue == 0 ) {
      return;
     }
     else{
      dec_btn.nextElementSibling.value = currentValue - 1;
     }
    })
  })

}



  // for price range meter

  
  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
    let priceGap = 1000;
  

  if(priceInput && rangeInput && range){
      priceInput.forEach((input) => {
          input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput[0].value),
              maxPrice = parseInt(priceInput[1].value);
          
            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
              if (e.target.className === "input-min") {
                rangeInput[0].value =  minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
              } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
              }
            }
          });
          });
          
          rangeInput.forEach((input) => {
          input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
              maxVal = parseInt(rangeInput[1].value);
          
            if (maxVal - minVal < priceGap) {
              if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
              } else {
                rangeInput[1].value = minVal + priceGap;
              }
            } else {
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
              range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
              range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
          });
          });
          
  }



  function toggleCheckedClass(event) {
    // Ensure that event.target and its closest parent are not null
    const checkboxWrapper = event.target.closest('.input-wrapper');
    if (checkboxWrapper) {
        if (event.target.checked) {
            checkboxWrapper.classList.add('checked');
        } else {
            checkboxWrapper.classList.remove('checked');
        }
    }
}
  const checkboxes = document.querySelectorAll('.input-wrapper input[type="checkbox"]');
    
  if (checkboxes.length > 0) {
      checkboxes.forEach(checkbox => {
          checkbox.addEventListener('change', toggleCheckedClass);
      });
  }
  
  // flat-picker js

  flatpickr("#service-date", {
    dateFormat: "Y-m-d", // Customize the date format if needed
    minDate: "today", // Optional: set minimum date
  });

  // flatpickr js for update dob
  flatpickr("#update-dob", {
    dateFormat: "d/m/y", // Customize the date format if needed
  });
  
  // toggole sidebar javascript


  const toggleButton = document.querySelector(".side-toggole-icon-side");
  const sidebarContainer = document.querySelector(".side-bar-container");

  if(toggleButton && sidebarContainer){
    toggleButton.addEventListener("click", () => {
      sidebarContainer.classList.toggle("close");
    });
    
  }

  //  switch Buyer to Seller
  const switch_mode = document.querySelector(".switch input");

  if (switch_mode) {
    const switchModeSection = document.querySelector(".switch-mode-section");

    switch_mode.addEventListener("change", function () {
      if (this.checked) {
        switchModeSection.classList.toggle("checked");

      } else {
        switchModeSection.classList.remove("checked");
      }
    });

    switch_mode.addEventListener('click', () => {
      switchModeSection.click();
    })
    
  }

  // seller home page counterpart
  const counters = document.querySelectorAll(".counter-box h2");
  // console.log(counters);
  if (counters) {
    // console.log(counters);
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        // adjust counter time
        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }


/**
 * Initializes image upload functionality for a given container.
 * @param {Object} config - Configuration for the image upload functionality.
 * @param {string} config.containerSelector - Selector for the container element.
 * @param {string} config.uploadInputSelector - Selector for the file input element.
 * @param {string} config.previewSelector - Selector for the preview container element.
 * @param {number} config.minImageCount - Minimum number of images required.
 * @param {Array<string>} config.acceptedImageTypes - Array of accepted image MIME types.
 */
function initializeImageUpload({
  containerSelector,
  uploadInputSelector,
  previewSelector,
  minImageCount,
  acceptedImageTypes
}) {
  // Attempt to select the elements
  const container = document.querySelector(containerSelector);
  const uploadInput = document.querySelector(uploadInputSelector);
  const preview = document.querySelector(previewSelector);

  // Check if elements exist
  if (container && preview && uploadInput) {
    function handleFiles(files) {
      preview.innerHTML = "";
      const images = Array.from(files);

      if (images.length < minImageCount) {
        alert(`You need at least ${minImageCount} images.`);
        return;
      }

      const invalidFiles = images.filter(image => !acceptedImageTypes.includes(image.type));
      if (invalidFiles.length > 0) {
        alert("Some files are not valid images.");
        return;
      }

      images.forEach((image) => {
        const img = document.createElement("img");
        const reader = new FileReader();

        reader.onload = (e) => {
          img.src = e.target.result;
          preview.appendChild(img);
        };
        reader.readAsDataURL(image);
      });
    }

    uploadInput.addEventListener("change", (e) => {
      handleFiles(e.target.files);
    });

    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      container.classList.add("dragover");
    });

    container.addEventListener("dragleave", (e) => {
      e.preventDefault();
      container.classList.remove("dragover");
    });

    container.addEventListener("drop", (e) => {
      e.preventDefault();
      container.classList.remove("dragover");
      handleFiles(e.dataTransfer.files);
    });

    container.addEventListener("click", () => {
      uploadInput.click();
    });
  } 
}

// Initialize product image upload
initializeImageUpload({
  containerSelector: "[data-product-image-container]",
  uploadInputSelector: "[data-product-image-upload-input]",
  previewSelector: "[data-product-image-preview]",
  minImageCount: 4,
  acceptedImageTypes: ['image/jpeg', 'image/png']
});

// Initialize service image upload
initializeImageUpload({
  containerSelector: "[data-service-image-container]",
  uploadInputSelector: "[data-service-image-upload-input]",
  previewSelector: "[data-service-image-preview]",
  minImageCount: 4,
  acceptedImageTypes: ['image/jpeg', 'image/png']
});





  // upload profile image in settings
  const profile_image_label = document.querySelector('.update-profile-img-label');
  const profile_image_upload_input = document.querySelector('#update-profile-img');
  const profile_image_preview = document.querySelector('.updated-image-preview-container');

  if (profile_image_label && profile_image_upload_input && profile_image_preview) {
    const handleFiles = (files) => {
      if (files.length > 0) {
        const file = files[0];
        console.log(file);
        const reader = new FileReader();
        reader.onload = function (e) {
          profile_image_preview.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
      }
    };

    profile_image_upload_input.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });

    profile_image_label.addEventListener('dragover', (e) => {
      e.preventDefault();
      profile_image_label.classList.add('dragover');
    });

    profile_image_label.addEventListener('dragleave', (e) => {
      e.preventDefault();
      profile_image_label.classList.remove('dragover');
    });

    profile_image_label.addEventListener('drop', (e) => {
      e.preventDefault();
      profile_image_label.classList.remove('dragover');
      handleFiles(e.dataTransfer.files);
    });
  }

  // toggling upload form
  const tabButtons = document.querySelectorAll(".tab-btn");
  const forms = document.querySelectorAll(".upload-form");
  console.log(tabButtons);
  if (tabButtons && tabButtons.length > 0) {
    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("tab-active"));
        button.classList.add("tab-active");

        forms.forEach((form) => form.classList.remove("active"));
        forms[index].classList.add("active");
      });
    });
  }

  // Initialize the first form as active
  if (forms && forms.length > 0) {
    forms[0].classList.add("active");
  }

  // toggle the show and hide password field in settings

  const eyeIcons = document.querySelectorAll(".show-password")


  console.log(eyeIcons)

  eyeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const password_wrapper = icon.parentNode;
      const input = password_wrapper.querySelector("input");
      input.type = input.type === "password" ? "text" : "password";
    });
  });
  
// product details preview image 


  const product_images_thumb_items = document.querySelectorAll('.thumbnail-item');
  const product_details_preview_image = document.querySelector('.product-preview-image-container')
  if (product_images_thumb_items && product_details_preview_image) {

    product_images_thumb_items.forEach((image) => {
      image.addEventListener('click', (e) => {
        product_images_thumb_items.forEach((item) => item.classList.remove("selected"));
        image.classList.add("selected");
        const image_src = image.querySelector('img').src;
        console.log(image_src);
        product_details_preview_image.querySelector('img').src = image_src;
      });
    })
  }

  const color_items = document.querySelectorAll('.color-item');
  if (color_items && product_details_preview_image) {

    color_items.forEach((image) => {
      image.addEventListener('click', (e) => {
        color_items.forEach((item) => item.classList.remove("selected"));
        image.classList.add("selected");
        const image_src = image.querySelector('img').src;
        console.log(image_src);
        product_details_preview_image.querySelector('img').src = image_src;
      });
    })
  }

  //================================= Bishal code ends here ==================================================





  // ===================================== Nahian Js start :: =============================

  function passwordStepsForm() {
    var otp_inputs = document.querySelectorAll(".otp__digit");
    let continueBtntwo = document.querySelector(".nr--continue--btn--two");

    let inputBox = document.querySelector(".nr--input--field");
    let continueBtn = document.querySelector(".nr--continue--btn");
    let errorText = document.querySelector(".nr--EroorText");
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Selecting step wrappers
    let stepWrapperOne = document.querySelector(".nr--step--wrapper--one");
    let stepWrapperTwo = document.querySelector(".nr--step--wrapper--two");
    let stepWrapperThree = document.querySelector(".nr--step--wrapper--three");
    let stepWrapperFour = document.querySelector(".nr--step--wrapper--four");

    let updateBtn = document.querySelector(".nr--continue--btn--2");
    let resetPasss = document.querySelector("#password2");

    // Event listener for input box
    inputBox?.addEventListener("input", function () {
      // Toggle button state based on input value
      toggleButtonState();
    });

    // Event listener for continue button click
    continueBtn?.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission

      let inputValue = inputBox.value.trim(); // Get trimmed input value

      if (emailRegex.test(inputValue)) {
        // Valid email address
        console.log("Valid email address:", inputValue);
        errorText.innerHTML = "";

        // Proceed to display the second step if not already displayed
        if (stepWrapperTwo.style.display === "none") {
          console.log("Displaying step two");
          // stepWrapperOne.style.display = "none";
          // stepWrapperTwo.style.display = "block";
        } else {
          console.log("Step two is already displayed");
          stepWrapperOne.style.display = "none";
          stepWrapperTwo.style.display = "block";
          countDownStrat();
        }
      } else {
        // Invalid email address
        errorText.innerHTML = "Invalid email address";
        console.log("Invalid email address or no input provided");
      }
    });

    // Function to toggle button state based on input value
    function toggleButtonState() {
      let inputValue = inputBox.value.trim(); // Get trimmed input value

      if (inputValue !== "") {
        continueBtn.style.background = "#01763F";
        continueBtn.style.pointerEvents = "all";
        inputBox.style.border = "1px solid #01763F";
      } else {
        continueBtn.style.background = "#9FADA6";
        inputBox.style.border = "none"; // Disable button if input is empty
      }
    }

    // verification

    otp_inputs.forEach(function (input) {
      input.addEventListener("input", handleNextInput);
      input.addEventListener("keydown", handleBackspace);
    });

    function handleNextInput(event) {
      var currentInput = event.target;
      var index = getIndex(currentInput);

      if (index < otp_inputs.length) {
        currentInput.value = event.data; // Update current input value
        continueBtntwo.style.background = "#01763F";
        continueBtntwo.style.pointerEvents = "all";

        if (event.data && index < otp_inputs.length - 1) {
          otp_inputs[index + 1].focus(); // Move focus to the next input
        }

        updateOtpDisplay(); // Update OTP display
      }
    }

    function handleBackspace(event) {
      var currentInput = event.target;
      var index = getIndex(currentInput);

      if (event.keyCode === 8) {
        if (index > 0 && currentInput.value === "") {
          otp_inputs[index - 1].focus(); // Move focus to the previous input
          otp_inputs[index - 1].value = ""; // Clear previous input value
        } else {
          currentInput.value = ""; // Clear current input value
        }
        updateOtpDisplay(); // Update OTP display
      }
    }

    function updateOtpDisplay() {
      var finalKey = "";
      otp_inputs.forEach(function (input) {
        finalKey += input.value;
      });

      var otpDisplay = document.querySelector("#_otp");
      if (finalKey.length === otp_inputs.length) {
        otpDisplay.classList.replace("_notok", "_ok");
        otpDisplay.innerText = finalKey;

        continueBtntwo?.addEventListener("click", function () {
          if (stepWrapperThree.style.display === "none") {
            console.log("Displaying step two");
            // stepWrapperOne.style.display = "none";
            // stepWrapperTwo.style.display = "block";
          } else {
            console.log("Step two is already displayed");
            stepWrapperThree.style.display = "block";
            stepWrapperOne.style.display = "none";
            stepWrapperTwo.style.display = "none";
            countDownStrat();
          }
        });
      } else {
        otpDisplay.classList.replace("_ok", "_notok");
        otpDisplay.innerText = finalKey;
      }
    }

    function getIndex(input) {
      return Array.from(otp_inputs).indexOf(input);
    }

    // count Down starts

    function countDownStrat() {
      // Attempt to select the countdown element
      let countDown = document.querySelector(".nr--timer--countdown");

      // Check if the countdown element exists and is not null or undefined
      if (countDown) {
        let timer = 30;

        const timeCountDown = setInterval(() => {
          if (timer > 0) {
            timer--;
            // Check if countDown.innerHTML is not null or undefined before setting it
            if (
              countDown.innerHTML !== null &&
              countDown.innerHTML !== undefined
            ) {
              countDown.innerHTML = timer;
            }
          } else {
            clearInterval(timeCountDown);
          }
          // console.log(timer);
        }, 1000);
      }
    }

    // btn3

    resetPasss?.addEventListener("input", function () {
      let inputValueTwo = resetPasss.value.trim();

      if (inputValueTwo !== "") {
        updateBtn.removeAttribute("disabled");
      } else {
        updateBtn.setAttribute("disabled", true);
      }
    });
  }

  passwordStepsForm();

});






document.addEventListener("click", function (event) {
  if (event.target.closest("#nr--videoPlay")) {
    event.preventDefault();
    $(".nr--videos")
      .magnificPopup({
        delegate: "a",
        type: "iframe",
        tLoading: "Loading video #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
          enabled: true,
        },
      })
      .magnificPopup("open");
  }
});


$(document).ready(function() {
  $('.nr--chartApex--left--heading select').niceSelect();
});




function chartOne(){
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof ApexCharts !== 'undefined') {
        var options = {
            series: [42, 43, 43, 47],
            chart: {
                width: 380,
                type: 'polarArea'
            },
            labels: ['Google', 'Personal', 'Others', 'Others'],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom'
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    }
                }
            },
            colors: ['#34CAA5', '#F6F6F6', '#84E8F4', '#FDCF24'],
            tooltip: {
                y: {
                    formatter: function(value) {
                        let total = options.series.reduce((a, b) => a + b, 0);
                        let percentage = (value / total * 100).toFixed(2);
                        return percentage + "%";
                    },
                    title: {
                        formatter: function() {
                            return '';
                        }
                    }
                }
            }
        };
  
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    } 
  });
}

chartOne()



function chartTwo(){

  document.addEventListener('DOMContentLoaded', function() {
    if (typeof ApexCharts !== 'undefined') {
        var options = {
            series: [
                {
                    name: "Net Sales",
                    type: 'line',
                    data: [45000, 56000, 60000, 52657, 54000, 49000, 53000]
                },
                {
                    name: "Revenue",
                    type: 'line',
                    data: [44000, 55000, 57000, 52000, 53000, 48000, 50000]
                }
            ],
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false
                },
                background: '#FFF'
            },
            stroke: {
                width: [4, 4]
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [0, 1]
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            xaxis: {
                type: 'category',
                axisBorder: {
                    show: true,
                    color: '#78909c'
                },
                axisTicks: {
                    show: true,
                    color: '#78909c'
                }
            },
            yaxis: [
                {
                    axisBorder: {
                        show: true,
                        color: '#78909c'
                    },
                    axisTicks: {
                        show: true,
                        color: '#78909c'
                    },
                    labels: {
                        style: {
                            colors: '#78909c'
                        }
                    }
                }
            ],
            grid: {
                show: true,
                borderColor: '#e0e0e0', // Color of the grid lines
                strokeDashArray: 4, // Style of the grid lines (dashed or solid)
                row: {
                    colors: ['#FFF', 'transparent'], // Alternate row colors (if using row-based coloring)
                    opacity: 0.5
                },
                column: {
                    colors: ['#EAFBF7', 'transparent'], // Alternate column colors (if using column-based coloring)
                    opacity: 0.5
                }
            },
            colors: ['#94D82D', '#69C5FF'],
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (value) {
                        return `$${value.toLocaleString()}`;
                    }
                }
            },
            legend: {
                show: false
            }
        };

        var chart = new ApexCharts(document.querySelector("#chartTwo"), options);
        chart.render();
    }
});
  
}

chartTwo()







// ===================================== Nahian Js ends :: =============================





// najmul js start

