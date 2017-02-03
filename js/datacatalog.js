jQuery(document).ready(function($) {
  var $container = $('.data-catalog');
  var $form = $('.data-catalog-search');
  var $search = $($('.data-catalog-search input')[0]);
  var $total = $('.data-catalog .total');

  // 1. Populate the select boxes.
  // walkthrough data and pull out all the values for that field
  // TODO: it might be more convenient to load the data from CSV rather than have to re-extract it from the page
  function populateSelectBoxes() {
    // list of tuples [ fieldName, fieldValue ] e.g. [ Format, CSV ]
    function findFieldValues(fieldName) {
      var selector = '.record .metadata th[data-field="' + fieldName + '"]';
      var $values = $(selector).parent().find('td.js-field-value')
      return fieldValues = $values.map(function(idx, $row) {
        var value = $($row).text().trim();
        return value;
      });
    }

    $form.find('select').each(function(idx, $select) {
      $select = $($select);
      var fieldName = $select.data('field');
      var values = findFieldValues(fieldName);
      values = [''].concat(_.unique(values));
      _.each(values, function(value, idx) {
        var $option = $('<option value="' + value + '">' + value + '</option>');
        $select.append($option);
      });
    });
  }
  populateSelectBoxes();

  // form submission or change
  $search.on('keyup', function(e) {
    doFilter();
  });
  $form.find('select').change(function(e) {
    doFilter();
  });
  $form.on('submit', function(e) {
    e.preventDefault();
    doFilter();
  });

  function doFilter () {
    var query = _.object(_.map($form.serializeArray(), _.values));

    var total = 0;
    $container.find('.record').each(function(idx, item) {
      var record = $(item);
      if (recordMatchToQuery(record, query)) {
        record.show();
        total++;
      } else {
        record.hide();
      }
    });
    $total.hide().text(total).fadeIn(150);
  }

  // given a query 
  function recordMatchToQuery(record, query) {
    var query = _.clone(query);
    var textq = query['query'].toLowerCase();
    delete query['query'];
    var title = record.data('title').toLowerCase();
    var matches = Boolean(title.match(textq));
    // remaining form values are the select drop down filters { 'Format': 'CSV', ...}
    _.each(_.keys(query), function(field) {
      var value = query[field];
      if (value) {
        var recValue = record.find('.metadata th[data-field="' + field + '"]')
          .parent().find('td.js-field-value');
        recValue = $(recValue[0]).text().trim()
        matches = matches && (value == recValue);
      }
    });
    return matches;
  }

});

