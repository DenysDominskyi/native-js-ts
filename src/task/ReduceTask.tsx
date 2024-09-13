import React from 'react'

export const ReduceTask = () => {

    // 1. Найдите общую сумму продаж по каждому товару
    // 2. Найдите товар с найбольшей суммой продаж
    // 3. Найдите месяц с найбольшей общей выручкой

    const salesData = [
        { item: "Laptop", quantity: 2, price: 1000, date: '2024-01-15'},
        { item: "Phone", quantity: 5, price: 500, date: '2024-01-18'},
        { item: "Tablet", quantity: 1, price: 700, date: '2024-01-21'},
        { item: "Laptop", quantity: 1, price: 1000, date: '2024-02-01'},
        { item: "Phone", quantity: 3, price: 500, date: '2024-02-03'},
        { item: "Tablet", quantity: 4, price: 700, date: '2024-02-10'},
        { item: "Laptop", quantity: 1, price: 1000, date: '2024-02-15'},
    ]

    const totalGoodsAmount = salesData.reduce((acc, data, index) => {
        if(data.item === 'Laptop') {
            acc.laptop +=  data.price * data.quantity
        }
        if(data.item === 'Phone') {
            acc.phone += data.price * data.quantity
        }
        if(data.item === 'Tablet') {
            acc.tablet += data.price * data.quantity
        }
        if(index === salesData.length - 1) {
            console.log(data)
        }

        return acc
    } ,{laptop: 0, phone: 0, tablet: 0, topGoods: ''})


    console.log(totalGoodsAmount)










  return (
    <div>reduceTask</div>
  )
}
