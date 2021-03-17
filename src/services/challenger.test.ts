import "babel-polyfill";
import axios from "axios";
import { expect, test } from "@jest/globals";


test.only("Test Challenger 01", async () => {

    const dataNumber = [4, 3, 2, 1];
    const dataString = ["d", "c", "b", "a"];

    const result = await axios.post("http://localhost:8080/ordernaLista", {
        lista: {
            salaN: dataNumber,
            salaS: dataString
        }
    })

    expect([...result.data.salaN]).toMatchObject([1, 2, 3, 4]);
    expect([...result.data.salaS]).toMatchObject(["a", "b", "c", "d"]);
})

test.only("Test Challenger 02", async () => {

    const intervaloA_01 = [20, 40];
    const intervaloB_01 = [10, 19];

    const intervaloA_02 = [20, 40];
    const intervaloB_02 = [10, 20];

    const result = await axios.post("http://localhost:8080/interlace", {
        intervaloA: intervaloA_01,
        intervaloB: intervaloB_01
    })

    const result2 = await axios.post("http://localhost:8080/interlace", {
        intervaloA: intervaloA_02,
        intervaloB: intervaloB_02
    })


    expect(result.data.msg).toBe(false)
    expect(result2.data.msg).toBe(true)
})