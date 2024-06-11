## React State

```
  const setCount = () => setNum(num + 1);
```
 Update this state after excution of function , so its not correct way to update the state

 Correct way to update the State is

 ```
    const setCount = () => setNum(num = num + 1);
 ```

 ### Another way to update state : 

 ```
  setNum(c = c + 1);
 ```

 ### spread the object that is in the state

 ```
                      --- State---

  const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });


  const playerOne = () => {
    setScore((oldScore) => {
      return { ...oldScore, p1Score: oldScore.p1Score + 1 };
    })
  }


  const playerTwo = () => {
    setScore((oldScore) => {
      return { ...oldScore, p2Score: oldScore.p2Score + 1 };
    })
  }
 ```