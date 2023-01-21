/**
 * @function `uuid` - Generate a unique UUID composed of random characters and numbers.
 * @param { Number } [number] - The amount of UUID's to generate. Condition: **`1 < amount < 64`**
 * @returns { Array } - An array of unique UUID's of the amount inputted that follows this rule: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 */

function generateUUID(amount) {
    const uuids = [];

    let i = 0;

    do {
        var d = new Date().getTime();

        let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = Math.random() * 16;

                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);

                return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
            }
        );

        uuids.push(uuid);

        i++;
    } while (i < amount);

    return uuids;
}

function uuid(number) {
    let amount = 1;

    if (number && !isFinite(number)) throw new TypeError("Max number must be a number");
    if ((number && number < 1) || (number && number >= 64)) throw new RangeError("Amount must be equal or higher than 1 and lower than 64");

    if (number) amount = number;

    return generateUUID(amount);
}

module.exports = uuid;
