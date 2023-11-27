import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'



export const useDataStore = defineStore('data', () => {
  const calendar = reactive([
    {
      month: "Январь",
      dates: [
        {
          date: 26,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 3,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 6,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 7,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 10,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 13,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 16,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }
      ]
    },
    {
      month: "Февраль",
      dates: [
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 6,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 10,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 12,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 13,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Праздник для мужчин',
              desq: 'Весь день тусуемся в нашем офисе',
              time: '11:00–20:00',
              link: '',
              location: 'Офис'
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 24,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }
      ]
    },
    {
      month: "Март",
      dates: [
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 6,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: [],
          events: [
            {
              name: 'Праздник для девушек',
              desq: 'Весь день поздравляем девушек в нашем офисе',
              time: 'Весь день',
              link: '',
              location: 'Офис'
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 10,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 13,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 19,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }
      ]
    },
    {
      month: "Апрель",
      dates: [
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 6,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 10,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 13,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 16,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        }
      ]
    },
    {
      month: "Май",
      dates: [
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 6,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 7,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 8,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 10,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 13,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 21,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }
      ]
    },
    {
      month: 'Июнь',
      dates: [
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 6,
          birthdate: ['тестовый тест тестович'],
          events: [
            // {
            //   name: 'Митап с руководителями ИТ Решений',
            //   desq: ['На встрече вы сможете задать вопросы руководителям, поделиться предложениями и получить ответы из первых рук.', 'Круг тем для обсуждения — широкий (от «что с импортозамещением в ДИТ?» до «почему в кофе-точках Армы–19 не созревает кофе?»), формат — открытый, без официоза и протокола.'],
            //   time: '',
            //   link: ''
            // }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 10,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 13,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 18,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 19,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 24,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        }
      ]
    },
    {
      month: 'Июль',
      dates: [
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 5,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 6,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 10,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 13,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 16,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [
            // {
            //   name: 'День рождения кластера',
            //   desq: '',
            //   time: '',
            //   link: ''
            // }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 30,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 6,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }

      ]
    },
    {
      month: 'Август',
      dates: [
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 6,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 7,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 10,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 13,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 21,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 24,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 3,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }

      ]
    },
    {
      month: 'Сентябрь',
      dates: [
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 3,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 5,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 6,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 10,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 13,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: [],
          events: [
            {
              name: 'Старт оценки сотрудников',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 24,
          birthdate: ['Скворцов Валерий Юрьевич (Сервис-менеджер SM)',],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }

      ]
    },
    {
      month: 'Октябрь',
      dates: [
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 6,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 10,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 13,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 16,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 30,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 31,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }

      ]
    },
    {
      month: 'Ноябрь',
      dates: [
        {
          date: 30,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 31,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 6,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 9,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 10,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 12,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 13,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 18,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 19,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 25,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 26,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: [],
          events: [
            // {
            //   name: 'Мандариновый субботник',
            //   desq: '',
            //   time: '',
            //   link: ''
            // }
          ],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        }

      ]
    },
    {
      month: 'Декабрь',
      dates: [
        {
          date: 27,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: false
        },
        {
          date: 1,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 2,
          birthdate: [],
          events: [
            // {
            //   name: 'Мандариновый субботник',
            //   desq: '',
            //   time: '',
            //   link: ''
            // }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 3,
          birthdate: ['тестовый тест тестович'],
          events: [],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 4,
          birthdate: [],
          events: [],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 5,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: true,
          isWeekend: true
        },
        {
          date: 6,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 7,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 8,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 9,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 10,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 11,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 12,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            },
            // {
            //   name: 'Митап с руководителями ИТ Решений',
            //   desq: '',
            //   time: '',
            //   link: ''
            // }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 13,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 14,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 15,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 16,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 17,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 18,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 19,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 20,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 21,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 22,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 23,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Новый год',
              desq: 'Подводим итоги уходящего года. Празднуем онлайн и офлайн. Поздравляем коллег и вручаем призы лауреатам.',
              time: '11:00–20:00',
              link: '',
              location: 'Webinar'
            },
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 24,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 25,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 26,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 27,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 28,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 29,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: false
        },
        {
          date: 30,
          birthdate: ['тестовый тест тестович'],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        },
        {
          date: 31,
          birthdate: [],
          events: [
            {
              name: 'Событие 1',
              desq: '',
              time: '',
              link: ''
            }
          ],
          active: null,
          otherMonth: false,
          isWeekend: true
        }

      ]
    }
  ]);


function showBirthday(date) {
    return date.birthdate;
}
function showEvents(date) {
  return date.events;
}
function getMonthEvents(month, activeMonth, monthEvents) {
  if (month.month === activeMonth) {
    monthEvents.length = 0;
    for( let i = 0; i < month.dates.length; i++) {
      if(!month.dates[i].otherMonth) {
        for(let k = 0; k < month.dates[i].events.length; k++) {
          if(month.dates[i].events[k].name !== 'Событие 1') {
            monthEvents.push(month.dates[i].events[k]);
          }
        }
      }
    }
    if(month.month === 'Декабрь' || month.month === 'Январь') {
      monthEvents.push({ name: 'Событие 1', desq: '', time: '',link: ''})
    }
  }
}

function getMonthBirthdays(month, activeMonth, monthBirthdays) {
  if (month.month === activeMonth) {
    monthBirthdays.length = 0;
    for( let i = 0; i < month.dates.length; i++) {
      if(!month.dates[i].otherMonth && month.dates[i].birthdate.length > 0) {
        monthBirthdays.push(month.dates[i]);
      }
    }
  }
}

function getCurrentMonthBirthdays(calendar, activeMonth, monthBirthdays) {
  for(let i = 0; i < calendar.length; i++) {
    if (calendar[i].month === activeMonth) {
      for(let k = 0; k < calendar[i].dates.length; k++) {
        if(!calendar[i].dates[k].otherMonth && calendar[i].dates[k].birthdate.length > 0) {
          monthBirthdays.push(calendar[i].dates[k]);
        }
      }
    }
  }
}

function setStartMonth(activeMonth) {
  let res = [];
  for(let i = 0; i < calendar.length; i++) {
    if(calendar[i].month === activeMonth) {
      for( let k = 0; k < calendar[i].month.dates; k++) {
        res.push( calendar[i].month.dates[k])
        console.log(calendar[i].month.dates[k]);
      }
    }
  }
  return res;
}


return { calendar, showBirthday, showEvents, getMonthEvents, getMonthBirthdays, setStartMonth, getCurrentMonthBirthdays }
})
