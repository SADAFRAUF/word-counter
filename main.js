import inquirer from 'inquirer';
const wordCount = (string) => {
    const words = string.trim().split(/\s+/g);
    console.log("Total words in the para are: " + words.length);
};
const getInput = async () => {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter your para: ",
        }
    ]);
    await wordCount(userInput.para);
};
await getInput();
