// const {div, p, ul, li, a} = van.tags;

// const Hello = () => div(
//     p("👋Hello"),
//     ul(
//       li("🗺️World"),
//       li(a({href: ""}, "🍦VanJS")),
//     ),
//   )
  
//   van.add(document.body, Hello())

// const {span, button} = van.tags;

// const Counter = () => {
//     const counter = van.state(0)
//     return span(
//       "❤️ ", counter, " ",
//       button({onclick: () => ++counter.val}, "👍"),
//       button({onclick: () => --counter.val}, "👎"),
//     )
//   }
  
// van.add(document.body, Counter())
// const {div, button, pre} = van.tags;

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const Run = ({sleepMs}) => {
//   const steps = van.state(0)
//   ;(async () => { for (; steps.val < 40; ++steps.val) await sleep(sleepMs) })()
//   return pre(() => `${" ".repeat(40 - steps.val)}🚐💨Hello VanJS!${"_".repeat(steps.val)}`)
// }


// const Hello = () => {
//   const dom = div()
//   return div(
//     dom,
//     button({onclick: () => van.add(dom, Run({sleepMs: 2000}))}, "Hello 🐌"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 500}))}, "Hello 🐢"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 100}))}, "Hello 🚶‍♂️"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 10}))}, "Hello 🏎️"),
//     button({onclick: () => van.add(dom, Run({sleepMs: 2}))}, "Hello 🚀"),
//   )
// }

// van.add(document.body, Hello())

// const {div, button, a} = van.tags;

// const StaticDom = () => {
//     const dom = div(
//       div(
//         button("Dummy Button"),
//         button(
//           {onclick: () =>
//             van.add(dom,
//               div(button("New Button")),
//               div(a({href: "https://www.example.com/"}, "This is a link")),
//             )
//           },
//           "Button to Add More Elements"),
          //async нужен для того, чтобы вешать несколько событий на кнопку//
//         button({onclick: async ()=>{
//             console.log('1')
//             alert('1')
//         }},"Hello"),
//             ),
//             )
//             return dom
//   }
// van.add(document.body, StaticDom())
