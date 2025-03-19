(function() {
  const print_line = (count) => {
    let print_val = '';
    for (let i = 1; i <= count; i++) {
      console.log(print_val += '#');
    }
  };

  print_line(7);
})();

