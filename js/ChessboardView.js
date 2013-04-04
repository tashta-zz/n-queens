var ChessboardView = Backbone.View.extend({

  render: function(n, board){
    var tags = this.buildTable(n, board);
    return this.$el.html(tags);
  },

  buildTable: function(n, board){
    var table = "<table>";
    for (var r=0; r<n; r++){
      table += "<tr class='row'>";
      for (var c=0; c<n; c++){
        table += "<td class='square ";
        if ((r+c)%2){
          table += "black ";
        } else {
          table += "white ";
        }
        if (board[r] === c){
          table += "queenOn'>&#9819;</td>";
        } else {
          table += "'></td>";
        }
      }
      table += "</tr>"
    }
    table += "</table>"
    return table;
  }

});



  

