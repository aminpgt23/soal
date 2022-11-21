$(document).ready(function(){

    $("#clik").click(function(){
       $("#alertid").removeClass("d-none");
       window.scrollTo(0, 0);
       const nama = $("#inputemail").val();
       $("#alerttext").html("trima kasih! "+ nama + " telah melihat web ini" );
    })
    $("#buttonclose").click(function(){
       $("#alertid").addClass("d-none");
    })
    $("#mautieid").click(function(){
        window.scrollTo(0, 0);
        const kursi = $("#mautieid").attr("src");
        $("#kursiid").attr("src",kursi);
        $("#kursiid").css("width","500")
    })
    $("#samanid").click(function(){
        window.scrollTo(0, 0);
        const saman = $("#samanid").attr("src");
        $("#kursiid").attr("src",saman);
        $("#kursiid").css("width","500")
    })
    $("#linoid").click(function(){
        window.scrollTo(0, 0);
        const lino = $("#linoid").attr("src");
        $("#kursiid").attr("src",lino);
        $("#kursiid").css("width","500")
    })
    $("#syailid").click(function(){
        window.scrollTo(0, 0);
        const syail = $("#syailid").attr("src");
        $("#kursiid").attr("src",syail);
        $("#kursiid").css("width","500")
    })
    $("#submitid").click(function(e){
        e.preventDefault();
        $("#btnid").removeClass("d-none");
        $("#formid").addClass("d-none");
        const id = $("#exampleId").val();

        $("#idcoba").html("terima kasih " + id + " telah order di web kami !" );
    })
});