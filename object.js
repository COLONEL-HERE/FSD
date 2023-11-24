function Party(){
    this.x = 0;
    this.party = function () {
        this.x = this.x + 1;
        console.log("So far"+this.x);
        
    }
}

a = new Party();
a.party();
a.party();
a.party();