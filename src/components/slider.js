const Slider = () => {
  // // Slider
  // // let isToggle = false;
  // // Function to update slider height
  // function update() {
  //   window.requestAnimationFrame(update);
  //   let carousel_inner = document.querySelector(".carousel-inner");
  //   let height_slide = document.querySelectorAll(".slide")[1].offsetHeight;
  //   carousel_inner.style.height = height_slide + "px";
  // }

  // update(); // Call the update function

  // // Slide tiếp theo
  // function slideNext() {
  //   let lists = document.querySelectorAll(".slide");
  //   document.getElementById("carousel-inner").appendChild(lists[0]);
  // }

  // // SLide trước đó
  // function slidePrev() {
  //   let lists = document.querySelectorAll(".slide");
  //   document.getElementById("carousel-inner").prepend(lists[lists.length - 1]);
  // }

  // // Slide tự động chạy
  // let autoShow = setInterval(slideNext, 3500);

  // // Button slide
  // document.getElementById("btn-next").addEventListener("click", () => {
  //   slideNext();
  //   // Reset Interval
  //   clearInterval(autoShow);
  //   autoShow = setInterval(slideNext, 3500);
  // });

  // // Button slide
  // document.getElementById("btn-prev").addEventListener("click", () => {
  //   slidePrev();
  //   // Reset Interval
  //   clearInterval(autoShow);
  //   autoShow = setInterval(slideNext, 3500);
  // });

  return /*html*/ `
    <!-- Slider start -->
    <div class="carousel-slider">
      <div class="carousel-inner" id="carousel-inner">
        <!-- Your slide content goes here -->
      </div>
      <div class="carousel-button carousel-button-prev" id="btn-prev">
        <i class="fa-sharp fa-solid fa-chevron-left"></i>
      </div>
      <div class="carousel-button carousel-button-next" id="btn-next">
        <i class="fa-sharp fa-solid fa-chevron-right"></i>
      </div>
    </div>
    <!-- Slider end -->
  `;
};

export default Slider;
