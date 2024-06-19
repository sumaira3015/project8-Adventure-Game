import inquirer from "inquirer";
// ----------Game variable-------------
let enemies = ["skeleton", "Zombie", "warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
// --------------Player Variable-----------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPortion = 3;
let healthPortionHealAmount = 30;
let healthPortionDropChance = 50;
// ------------While loop-----------
let gameRunning = true;
console.log(`Welcome To DeadZone`);
game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`#  ${enemy} has appeared \n`);
    // continue our game while enemy is alive
    while (enemyHealth > 0) {
        console.log(`Your Health: ${heroHealth}`);
        console.log(`${enemy}  Health: ${enemyHealth} `);
        let options = await inquirer.prompt({
            type: "list",
            name: "ans",
            message: "What would You like to do?",
            choices: ["1.Attack", "2.Take Health portion", "3.Run"]
        });
        if (options.ans === "1.Attack") {
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the enemy ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage`);
            if (heroHealth < 1) {
                console.log(`You are to much Damage ,You are weak too continue`);
                break;
            }
        }
        else if (options.ans === "2.Take Health portion") {
            if (numHealthPortion > 0) {
                heroHealth += healthPortionHealAmount;
                numHealthPortion--;
                console.log(`you use health Portion for:${healthPortionHealAmount}`);
                console.log(`You now have ${heroHealth} Health`);
                console.log(`you have ${numHealthPortion} Health portions Left`);
            }
            else {
                console.log(`you have no Health portion Left ,Defeat enemy to have Health Portion Chance`);
            }
        }
        else if (options.ans === "3.Run") {
            console.log(`You run away from ${enemy}`);
            continue game;
        }
    }
    if (heroHealth < 1) {
        console.log(`You are out From battle ,You are too Weak`);
        break;
    }
    console.log(`${enemy} was Defeated`);
    console.log(`You have ${heroHealth} health`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPortionDropChance) {
        numHealthPortion++;
        console.log(`Enemy Give You Health Portion `);
        console.log(` Your Health is ${heroHealth}`);
        console.log(`Your Health Portion is:${numHealthPortion}`);
    }
    let useroptions = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What would you to do now?",
        choices: ["1.continue", "2.Exit"]
    });
    if (useroptions.ans === "1.continue") {
        console.log(`You Are continue to your Adventure Game`);
    }
    else {
        console.log(`You are successfully Exit from Deadzone`);
        break;
    }
    console.log("Thankyou For Playing \n");
}
