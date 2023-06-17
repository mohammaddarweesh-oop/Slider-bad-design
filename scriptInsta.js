hello = () => "hello";

hello();
var image = ["images/im1.jpg","images/im2.jpg","images/im3.jpg","images/im4.png","images/im5.jpg","images/im6.png"
,"images/im7.jpg","images/im8.jpg","images/im9.jpg"];
var index = 0;
var im = document.getElementById("images");
function myImages(){

    
    
        
        if (index <= image.length-2 ) {
            index++;
            im.src = image[index];
            console.log("num : " + index);
        }
        else{
            index = 0;
            im.src = image[index];
            // print index for image 
            console.log("num : " + index);
        }
    
    
}
function pervusImag(){
    if (index > 0) {
        index--;
        im.src = image[index];
    }
    else{
        index = 8;
        im.src = image[index];
    }
}