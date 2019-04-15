class Item{
  constructor(name, damage, multiplier, autoClickSpeed, upgradeMultiplierCost, upgradeAutoClickSpeedCost){
      this.name = name
      this.damage = 1
      this.multiplier = 1
      this.autoClickSpeed = 0
      this.upgradeMultiplierCost = x
      this.upgradeAutoClickSpeedCost = x
    }
}

class Boss{
  constructor(name, title, healthPoint, level, introSound, deathSound, progress){
      this.name = name
      this.title = title
      this.healthPoint = 100
      this.level = level
      this.introSound = introSound
      this.deathSound = deathSound
      this.progress = document.querySelector('#avancement')
    }

    display()
    {
      console.log(this.name, this.title, this.healthPoint, this.level, this.introSound, this.deathSound)
      this.progress.setAttribute('value',this.healthPoint )
      this.progress.setAttribute('max',this.healthPoint )
    }
  }


let bigboss = new Boss('Hulk', 'test', 150, 1,'test', 'test')
bigboss.display()

function punchDamage(){
  this.progress.setAttribute('value','value' )
}
document.getElementById("Punch").addEventListener("click", punchDamage());
