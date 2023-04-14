const vueApp = Vue.createApp({

  data(){
    return{
      playerHealth: 100,
      monsterHealth: 100,
      turnCount: 0,
      gameWinner: null,
      battleLog: [],
    }
  },

  computed:{
    playerBar(){ return this.playerHealth + '%'},
    monsterBar(){ return this.monsterHealth + '%'},

    specialAttackToken() { return (this.turnCount % 3 !== 0)},

    healPlayerToken() { return this.playerHealth === 100;}
  },

  watch: {
    playerHealth(value) {
      if(value === 0 && this.monsterHealth === 0){
        this.gameWinner = 'Draw';
      }
      else if (value === 0){
        this.gameWinner = 'Monster';
      }
    },

    monsterHealth(value){
      if(value === 0){
        this.gameWinner = 'Player';
      }
    }
  },

  methods:{

    attackMonster(){
      this.turnCount++;
    
      //Random number between 5 and 15
      const damage = Math.floor(Math.random() * (15 - 5)) + 5;
      this.monsterHealth -= damage;

      this.monsterHealth = (this.monsterHealth < 0) ? 0 : this.monsterHealth; 

      this.logMessage('Player', 'Attack', damage);
      this.attackPlayer();
    },

    attackPlayer(){
      const damage = Math.floor(Math.random() * (20 - 8)) + 8;
      this.playerHealth -= damage;

      this.playerHealth = (this.playerHealth < 0) ? 0 : this.playerHealth; 
      this.logMessage('Monster', 'Attack', damage);
    },

    specialAttack(){
      const damage = Math.floor(Math.random() * (40-20)) + 8;
      this.monsterHealth -= damage;

      this.monsterHealth = (this.monsterHealth < 0) ? 0 : this.monsterHealth; 

      this.logMessage('Player', 'Special Attack', damage);
      this.attackPlayer();
    },

    healPlayer(){
      this.turnCount++;
      this.playerHealth = (this.playerHealth > 80) ? 100 : this.playerHealth+20;

      this.logMessage('Player', 'Heal', 20);
      this.attackPlayer();
    },

    resetGame(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turnCount = 0;
      this.gameWinner = null;
      this.battleLog = [];
    },

    surrender(){
      this.gameWinner = 'Monster';
    },

    logMessage(character, action, value){
      this.battleLog.unshift({
        actor: character,
        action: action,
        value: value
      });
    },
  },
  

}).mount("#game");