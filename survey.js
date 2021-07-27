const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let responses = {};

rl.question(
  "What's your name? Nicknames are also acceptable :)\n",
  (answer) => {
    responses["name"] = answer;

    rl.question("What's an activity you like doing?\n", (answer) => {
      responses["activity"] = answer;

      rl.question("What do you listen to while doing that?\n", (answer) => {
        responses["music"] = answer;

        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)\n",
          (answer) => {
            responses["meal"] = answer;

            rl.question(
              "What's your favourite thing to eat for that meal?\n",
              (answer) => {
                responses["food"] = answer;

                rl.question(
                  "Which sport is your absolute favourite?\n",
                  (answer) => {
                    responses["sport"] = answer;

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!\n",
                      (answer) => {
                        responses["superpower"] = answer;
                        rl.close();
                        let profile = `${responses.name} loves listening to ${responses.music} while ${responses.activity}, devouring ${responses.food} for ${responses.meal}, prefers ${responses.sport} over any other sport, and is amazing at ${responses.superpower}`;
                        console.log(profile);
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
