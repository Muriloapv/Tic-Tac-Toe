//tic tac toe
const tic_tac_toe = {

    //Atributos
    board: ['','','','','','','','',''],
    symbols: {
                options: ['X','O'],
                turn_index: 0,
                charge: function(){
                     this.turn_index =  (this.turn_index === 0 ? 1 : 0);
                }
            },
        container_element: null,
        gameover: false,
        winning_sequences: [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                    ],

    // FUNCTIONS
    init(container){
        this.container_element = container;
    },

    make_play(position){
        if (this.gameover) return false;
        if (this.board[position] === ''){
            this.board[position] = this.symbols.options[ this.symbols.turn_index ];
            this.draw();
            let winnning_sequences_index = this.check_winning_sequence ( this.simbols.options [ this.simbols.turn_index] );
            if (winnning_sequences_index >= 0){
                    this.game_is_over();
        } else {
                this.simbols.charge();
            }
            return true;
        } else {
            return false;
        }

    },

    game_is_over: function(){
        this.gameover = true;
        console.log("GAME OVER")
    },

    check_winning_sequence: function(symbol){
        for ( 1 in this.check_winning_sequence ){
            if  (this.board [ this.winning_sequences[i][0] ] == symbol   &&
                (this.board [ this.winning_sequences[i][1] ] == symbol   &&
                (this.board [ this.winning_sequences[i][2] ] == symbol  ){
                    console.log('Sequencia vencedora: ' + i);
                    return i;
                }
        };
        returnm -1;
    },

    draw: function(){
        let content = '';

        for ( i in this.board) {
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    }
};