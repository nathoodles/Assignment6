$.getJSON('astros.js', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    let info = Array();
    data['people'].forEach(function (d) {
        info.push([d['craft'], d['name']]);
    });

    var last = info[0][0];
    $('#craftNames').append('<dt>' + info[0][0] + ': </dt>');
    for(let i = 0; i<info.length; i++){
        if(info[i][0] == last){
            $('#craftNames').append('<dd>' + info[i][1] + '</dd>');
        }else{
            $('#craftNames').append('<dt>' + info[i][0] + ': </dt>');
            $('#craftNames').append('<dd>' + info[i][1] + '</dd>');
            last = info[i][0];
        }
    }

});
