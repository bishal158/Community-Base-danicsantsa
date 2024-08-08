
// orders i made status select
document.addEventListener('DOMContentLoaded', function() {
    const orderImadeEl = document.querySelector('.order-status-i-made');
    const items = orderImadeEl.querySelectorAll('.item');
  
  items?.forEach(function(item) {
      item?.addEventListener('click', function() {
          var status = this.id;
          
          // Update the value of the hidden input
          document.getElementById('order-status-i-made').value = status;
          
          // Remove the 'active' class from all items
          items?.forEach(function(item) {
              item?.classList.remove('active-order-tab');
          });

          // Add the 'active' class to the clicked item
          this.classList.add('active-order-tab');
          console.log(document.getElementById('order-status-i-made').value);
      });
  });
  
});

// made for me orders status select
document.addEventListener('DOMContentLoaded', function() {
    const orderImadeEl = document.querySelector('.order-status-made-for-me');
    const items = orderImadeEl.querySelectorAll('.item');
  
  items?.forEach(function(item) {
      item?.addEventListener('click', function() {
          var status = this.id;
          
          // Update the value of the hidden input
          document.getElementById('order-status-made-for-me').value = status;
          
          // Remove the 'active' class from all items
          items?.forEach(function(item) {
              item?.classList.remove('active-order-tab');
          });

          // Add the 'active' class to the clicked item
          this.classList.add('active-order-tab');
          console.log(document.getElementById('order-status-made-for-me').value);
      });
  });
  
});

// for table row actions modal

document.addEventListener('DOMContentLoaded', function() {
  const actionButtons = document.querySelectorAll('.three-dots-action-btn');
  let currentlyVisibleActionList = null;

  actionButtons?.forEach(button => {
      button?.addEventListener('click', function(event) {
          // Prevent the click from bubbling to the document
          event.stopPropagation();

          // Hide all action lists except the one being toggled
          document.querySelectorAll('.action-list')?.forEach(list => {
              if (list !== this.nextElementSibling) {
                  list.style.display = 'none';
              }
          });

          // Toggle the nearest action list
          const actionList = this.nextElementSibling;
          if (actionList?.style.display === 'none' || actionList?.style.display === '') {
              actionList.style.display = 'block';
              currentlyVisibleActionList = actionList;
          } else {
              actionList.style.display = 'none';
              currentlyVisibleActionList = null;
          }
      });
  });

  // Hide the action list when clicking outside
  document.addEventListener('click', function() {
      if (currentlyVisibleActionList) {
          currentlyVisibleActionList.style.display = 'none';
          currentlyVisibleActionList = null;
      }
  });

  // Prevent hiding when clicking inside the action list
  document.querySelectorAll('.action-list').forEach(actionList => {
      actionList.addEventListener('click', function(event) {
          event.stopPropagation();
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
   const  emojis = document.querySelectorAll('.emoji-container .box')
    console.log(emojis)
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            emojis.forEach((item) => item.classList.remove("selected"));
            emoji.classList.add("selected");
        })
    })
});
