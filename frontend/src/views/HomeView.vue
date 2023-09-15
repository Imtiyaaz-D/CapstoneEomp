<template>
    <div class="container-fluid">
        <div class="msg">
            <img src="https://i.postimg.cc/bJzQhrTd/Video-To-Gif-08-28-2023-02-14-1.gif" alt="spinning key chain">
        </div>
        <h2 class="heading-home"> Calm your mind with simple fidget spinners or if your looking for a gift for someone special.</h2>
        <h2 class="featuredProd">Products</h2>
        <!-- <div class="row">
          <div class="card-wrapper">
            <div class="card-contents">
              <img src="https://i.postimg.cc/FRCHsTHW/Figdet-Cube-Toy-removebg-preview.png" class="picture" >
              <div class="card-description">
                <h3>The Fidget Cube</h3>
                <p>The cube has multiple flips , switches and smooth ball on each side of the cube </p>
                
              </div>
            </div>
          </div>
        </div> -->
        <div id="carouselExampleFade" class="carousel carousel-dark slide carousel-fade">
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img src="https://i.postimg.cc/FRCHsTHW/Figdet-Cube-Toy-removebg-preview.png" class=" w-25" alt="Prod1">
            </div>
            <div class="carousel-item">
              <img src="https://i.postimg.cc/50Q8JQxC/Pokemon-Plush-Toys-Gengar-Plush-1024x1024-removebg-preview.png" class=" w-25" alt="Prod2">
            </div>
            <div class="carousel-item">
              <img src="https://i.postimg.cc/Cx6ZKMrH/Metal-Key-Chain-Fidget-Hand-Spinner-removebg-preview.png" class=" w-25" alt="Prod3">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <button class="btn btn-success">
          See Products
        </button>
    </div>
</template>

<script>
export default {
  
   
   
}
</script>

<style scoped>
body{
    padding:0;
    margin:0;
    box-sizing: border-box;
    
}
.msg {
  padding:0;
  margin:0;
  
}
.container-fluid{
  background-image: linear-gradient(to bottom right, #F6F0ED, #7EA8BE) 
}
.heading-home{
  margin: 5rem;
}
.picture{
  width:25rem;
}
</style>