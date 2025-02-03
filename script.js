const galleryImages = document.querySelectorAll('#gallary-container img'):
const lightbox = document.getElementById('lightbox');
const lightboximg = document.getElementById('lightbox-img');

galleryImages.forEach(image => (
 image.addEventListener('click', () => (
    lightboximg.src = image.src;
    lightbox.classList.add('visible');
  ));
));

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible'):
))

)));
)));
lightbox.addEventListener('click', (event) => (
  if (event.target === lightbox) {
    lightbox.classList.remove('visible');
  }
  //show next image in the lightbox

document.getElementById('next').addEventListener
  currentIndex = (currentIndex + 1)
  //show previous image in the lightbox

currentIndex = (currentIndex +1) % galleryimages.length
  lightboxing.src = image(currentIndex].src;

  // Keyboard navigation for the lightbox

//show previous image in the lightbox
 document.getElementById('prev').addEventListener('click') () => {
  currentIndex + (currentIndex - 1 = image.length) & galleryImages={.length;
    lighthoving.src = image{currentIndex.src;
    )));

    // keybaord naviagtion for the lightbox
    document.addEventListener('keydown') (event) 
    if (event.key <== "ArrowLight
      else if(event.key ===ArrowLeft
      currentIndex =
      lightbox.classLight.remove('visible');
      
  }
 }

  }
)