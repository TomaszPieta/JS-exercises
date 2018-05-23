$( () => {
    let url = 'https://restcountries.eu/rest/v1/name/';
    let list = $('#countries');
    let button = $('#search').click(search);
    function search() {
      let name = $('#name').val();
      if (!name.length) {
        $('<p>').text('Enter country name.').appendTo(list).css('color', 'red');
      }
      $.ajax({
        method: 'GET',
        url: url + name,
        success: show
      });
    }
    function show(response) {
      list.empty();
      response.forEach( (item) => {
        $('<li>').text(`You have been looking for: ${item.name}, capital: ${item.capital} population: ${item.population}, area: ${item.area}`).appendTo(list);
      });
    }
  });