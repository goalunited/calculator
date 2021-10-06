$(document).ready(function() {
    $("#staffEfficiency").click(function() {
        $.get({
            url: "staff-efficiency.html",
            success: function(response) {
                $("#content").html(response)
            }
        })
    })

    $("#tutorial").click(function() {
        $.get({
            url: "tutorial.html",
            success: function(response) {
                $("#content").html(response)
            }
        })
    })
    //Ajax show view content
    $("#aboutUs").click(function() {
        $.get({
            url: "about-us.html",
            success: function(response) {
                $("#content").html(response);
            }
        })
    })

    //Ajax show form content
    $("#value-calculate").click(function() {
        let salary = $("#salary").val();
        let exp = $("#exp").val();
        if (salary && exp) {
            let marketValue = Math.round((parseInt(salary)/(0.9 + parseInt(exp)/500)*150)/100)*100;
            let salesValue= Math.round(marketValue*0.8/100)*100;
            $("#mv").empty();
            $("#mv").append(numberWithCommas(marketValue));
            $("#sv").empty();
            $("#sv").append(numberWithCommas(salesValue));
        }
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
})

