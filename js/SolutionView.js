var SolutionView = Backbone.View.extend({

	events: {
		"click .solveButton" : "solve",
		"click .nextSolution" : "next"
	},

	initialize: function(){
		this.$('.aboutSolution').hide();
	},

	solve: function(e){
		e.preventDefault();
		this.solNum = 0;
		this.generateBoards();
		this.showSolution();
	},

	generateBoards: function(){
		this.n = this.$('.valueOfN').val();
		this.boards = solveNQueens(this.n);
	},

	showSolution: function(){
		if (!this.boards.length){
			this.$('.aboutSolution').hide();
			this.$('.noSolutions').text('No solutions');
		} else {
			this.$('.noSolutions').text('');
			this.chessboardView = new ChessboardView();
			this.$('.board').html(this.chessboardView.render(this.n, this.boards[this.solNum]));
			this.$('.solutionNumber').text(this.solNum+1);
			this.$('.numberOfSolutions').text(this.boards.length);
			this.$('.aboutSolution').show();
		}
	},

	next: function(event){
		event.preventDefault();
		if (this.solNum === this.boards.length-1){
			this.solNum = 0;
		} else {
			this.solNum += 1;
		}
		this.showSolution();
	}

});
