// let hasCrashed = false;

// async function startProgram() {
// 	mover(0, 30, 10)
//     registerEvent(EventType.onCollision, async () => {
//         hasCrashed = true;
//         crashLearner();
//     });
// }

// async function crashLearner() {
//     registerEvent(EventType.onCollision, async () => {
//         hasCrashed = true;
//         mover()
//     });
// }

// async function mover(heading, distance, velocity) {
//     // travel in burst, like pretty slow for a sec until collision
//     do {
//         await rollToDistance(heading, velocity, distance)
//     } while (hasCrashed == true)
// }

async function startProgram() {
    // go fully straight
    // go straight 1 square
    await rollToDistance(0, 35, 30)
    // go straight 1 square
    await rollToDistance(0, 35, 30)
    // go straight 1 square
    await rollToDistance(0, 35, 30)
    // go straight 1 square
    await rollToDistance(0, 35, 30)
    // go straight 1 square
    await rollToDistance(0, 35, 30)
    // go straight 1 square
    await rollToDistance(0, 35, 30)
    // go straight 1 square
    await rollToDistance(0, 35, 30)
    // go straight 1 square
    await rollToDistance(0, 35, 32)

    // go fully left
    // go left 1 square
    await rollToDistance(-90, 35, 32)
    // go left 1 square
    await rollToDistance(-90, 35, 32)
    // go left 1 square
    await rollToDistance(-90, 35, 32)
    // go left 1 square
    await rollToDistance(-90, 35, 32)

    // go fully down
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)

    // go fully right
    // go right 1 square
    await rollToDistance(90, 35, 32)
    // go right 1 square
    await rollToDistance(90, 35, 32)
    // go right 1 square
    await rollToDistance(90, 35, 32)

    // go fully up
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)

    // go fully left
    // go left 1 square
    await rollToDistance(-90, 35, 32)
    // go left 1 square
    await rollToDistance(-90, 35, 32)

    // go fully down
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)
    // go down 1 square
    await rollToDistance(-180, 35, 32)

    // go fully right
    // go right 1 square
    await rollToDistance(90, 35, 32)

    // go fully up
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)
    // go up 1 square
    await rollToDistance(0, 35, 32)

    exitProgram();
}