function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 được thực thi");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 được thực thi");
      resolve();
    }, 1500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 được thực thi! Hoàn thành");
      resolve();
    }, 2000);
  });
}

async function runTasks() {
  await task1();
  await task2();
  await task3(); 
}
runTasks();
