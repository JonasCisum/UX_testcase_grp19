var drop = false;
$(window).on("load", sidenErLoadet);

function sidenErLoadet() {
    $(".dropdown_section_content").hide();
    $(".dropdown_section_content1").hide();
    $(".dropdown_section_content2").hide();

}

$(".drop").on("click", klik);

function klik() {


    $(".dropdown_section_content").show();

    if (drop == false) {
        $(".dropdown_section_content").show();
        drop = true;
    } else {
        $(".dropdown_section_content").hide();
        drop = false;
    }
}

$(".drop1").on("click", klik1);

function klik1() {


    $(".dropdown_section_content1").show();

    if (drop == false) {
        $(".dropdown_section_content1").show();
        drop = true;
    } else {
        $(".dropdown_section_content1").hide();
        drop = false;
    }
}


$(".drop2").on("click", klik2);

function klik2() {


    $(".dropdown_section_content2").show();

    if (drop == false) {
        $(".dropdown_section_content2").show();
        drop = true;
    } else {
        $(".dropdown_section_content2").hide();
        drop = false;
    }
}
