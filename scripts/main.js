class Boss{
  constructor(name, class, healthPoint, level, introSound, deathSound)
    {
      this.name = name
      this.class = class
      this.healthPoint = healthPoint
      this.level = level
      this.introSound = introSound
      this.deathSound = deathSound
    }

    display()
    {
      console.log(this.name, this.class, this.healthPoint, this.level, this.introSound, this.deathSound)
    }
  }

    //let bourdin = new Boss('J.J.Boudin', 'Terreur des Politiques', 1000, 1, 'bourdinI.mp3', 'bourdinD.mp3')
    
