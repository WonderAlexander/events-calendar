<script setup>
  import { ref, reactive } from 'vue';
  import { useDataStore } from './stores/data';

  const calendarDates = useDataStore();
  let birthdayArr = ref('');
  const activeMonth = ref('');
  const selectedDate = ref('');
  const currentDay = new Date().getDate();
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const showBirthday = ref(false);
  const showBirthdayPopup = ref(false);
  const showEventsPopup = ref(false);
  const showEvents = ref(true);
  const showMonthEvents = ref(false);
  const newDate = ref('Сегодня');

  const eventsArr = ref('')
  const monthEvents = reactive([]);
  const monthBirthdays = reactive([]);
  const showMonthBirthdays = ref(false);

  const activeDate = ref('');
  let currentMonth = ref('');

  const body = document.querySelector('body');


  // Дата
  function setActualMonth() {
    let today = new Date();
    if( today.getMonth() === 0) {
      activeMonth.value = 'Январь';
      currentMonth.value = 'Январь';
    } else if (today.getMonth() === 1) {
      activeMonth.value = 'Февраль';
      currentMonth.value = 'Февраль';
    } else if (today.getMonth() === 2) {
      activeMonth.value = 'Март';
      currentMonth.value = 'Март';
    } else if (today.getMonth() === 3) {
      activeMonth.value = 'Апрель';
      currentMonth.value = 'Апрель';
    } else if (today.getMonth() === 4) {
      activeMonth.value = 'Май';
      currentMonth.value = 'Май';
    } else if (today.getMonth() === 5) {
      activeMonth.value = 'Июнь';
      currentMonth.value = 'Июнь';
    } else if (today.getMonth() === 6) {
      activeMonth.value = 'Июль';
      currentMonth.value = 'Июль';
    } else if (today.getMonth() === 7) {
      activeMonth.value = 'Август';
      currentMonth.value = 'Август';
    } else if (today.getMonth() === 8) {
      activeMonth.value = 'Сентябрь';
      currentMonth.value = 'Сентябрь';
    } else if (today.getMonth() === 9) {
      activeMonth.value = 'Октябрь';
      currentMonth.value = 'Октябрь';
    } else if (today.getMonth() === 10) {
      activeMonth.value = 'Ноябрь';
      currentMonth.value = 'Ноябрь';
    } else if (today.getMonth() === 11) {
      activeMonth.value = 'Декабрь';
      currentMonth.value = 'Декабрь';
    }
  }
  setActualMonth();

  function getCurrentBirhday(currentMonth, currentDay) {
    let month = calendarDates.calendar.find( item => item.month === currentMonth.value);
    let currentDateItem = month.dates.find( item => item.date === currentDay);
    birthdayArr = currentDateItem.birthdate;
  }
  getCurrentBirhday(activeMonth, currentDay)


  // Прекелючение месяца назад
  const showPreviousMonth = (month) => {
    month !== 'Январь' ? activeMonth.value = months[months.indexOf(month) - 1] : activeMonth.value = 'Декабрь';
  }

  // Переключение месяца вперед
  const showNextMonth = (month) => {
    month !== 'Декабрь' ? activeMonth.value = months[months.indexOf(month) + 1] : activeMonth.value = 'Январь';
  }


</script>

<template>
  <div class="calendar__app">
    <div class="calendar__app-wrapper">
      <div class="calendar__block">
        <div class="calendar__header-block">
          <h2 class="calendar__title">{{ activeMonth }}</h2>
          <div class="calendar__changer">
            <div class="month__changer month__changer--left" @click="showPreviousMonth(activeMonth)" style="margin-right: 20px;"></div>
            <div class="month__changer month__changer--right" @click="showNextMonth(activeMonth)"></div>
          </div>
        </div>

        <!-- Выбор типа календаря -->
        <ul class="calendar__cat-block">
          <li @click="showBirthday = false, showEvents = true" class="calendar__cat-item" :class="{ active__cat: showEvents}">
            <a>События</a>
          </li>
        
          <li @click=" showBirthday = true, showEvents = false, calendarDates.getCurrentMonthBirthdays(calendarDates.calendar, activeMonth, monthBirthdays)" class="calendar__cat-item" :class="{ active__cat: showBirthday}">
            <a>Сотрудники</a>
          </li>
        </ul>

        <!-- Календрарь -->
        <div class="calendar">
          <div class="calendar__inner">
            <div class="calendar__header">
              <div class="calendar__header-item">Пн</div>
              <div class="calendar__header-item">Вт</div>
              <div class="calendar__header-item">Ср</div>
              <div class="calendar__header-item">Чт</div>
              <div class="calendar__header-item">Пт</div>
              <div class="calendar__header-item">Сб</div>
              <div class="calendar__header-item">Вс</div>
            </div>

            <!-- Даты - мероприятия -->
            <div v-if="showEvents === true" class="calendar__dates" v-for="month in calendarDates.calendar">
              <div v-if="month.month === activeMonth" v-for="(date, index) in month.dates" :key="index" class="calendar__dates-item" :class="{ active: index === activeDate, current: currentMonth === activeMonth && date.date == currentDay, other__month: date.otherMonth }" @click="eventsArr = calendarDates.showEvents(date), date.otherMonth ? newDate = 'В другом месяце' : currentMonth === activeMonth && date.date == currentDay ? newDate = 'cегодня' : activeMonth === 'Март' ? newDate = date.date + ' ' + 'марта' : activeMonth === 'Август' ? newDate = date.date + ' ' + 'августа' : newDate = date.date + ' ' + activeMonth.slice(0, -1,).toLowerCase() + 'я', activeDate = index, selectedDate = date.date, calendarDates.getMonthEvents(month, activeMonth, monthEvents)"><div class="calendar__dates-item-inner" :class="{ weekend: date.isWeekend}">{{ date.date }}</div><div v-if="date.events.length > 0" class="calendar__dates-item-num">{{ date.events.length }}</div></div>
            </div>

            <!-- Даты - сотрудники -->
            <div v-if="showBirthday === true" class="calendar__dates" v-for="month in calendarDates.calendar">
              <div v-if="month.month === activeMonth"  v-for="(date, index) in month.dates" :key="index" @click="birthdayArr = calendarDates.showBirthday(date), date.otherMonth ? newDate = 'В другом месяце' : currentMonth === activeMonth && date.date == currentDay ? newDate = 'Сегодня' : activeMonth === 'Март' ? newDate = date.date + ' ' + 'марта' : activeMonth === 'Август' ? newDate = date.date + ' ' + 'августа' : newDate = date.date + ' ' + activeMonth.slice(0, -1,).toLowerCase() + 'я', activeDate = index, selectedDate = date.date, calendarDates.getMonthBirthdays(month, activeMonth, monthBirthdays)" class="calendar__dates-item"  :class="{ active: index === activeDate, current: currentMonth === activeMonth && date.date == currentDay, other__month: date.otherMonth }"><div class="calendar__dates-item-inner" :class="{ weekend: date.isWeekend}">{{ date.date }}</div><div v-if="date.birthdate.length > 0" class="calendar__dates-item-num">{{ date.birthdate.length }}</div></div>
            </div>

        </div>
      </div>
      </div>

       <!-- Блок с событиями -->
       <div v-if="showEvents" class="birthdays__block">
        <!-- <img src="https://static.tildacdn.com/tild3466-3766-4338-b438-663333326261/It__3-05.png" alt="" class="birthday__img" style="width: 380px"> -->
        <div class="birthdates">
          <h3 class="birthdates__header">{{ newDate }}:</h3>
          <div @click="showEventsPopup = true,showMonthEvents = false, body.style.overflow = 'hidden'" v-if="eventsArr.length !== 0" v-for="event in eventsArr" class="events__item today" style="cursor: pointer;">{{ event.name }}<div class="events__item-icon"><span class="right"></span></div></div>
          <p v-if="eventsArr.length === 0">Нет событий</p>
        </div>
        
        <!-- Блок с событиями за месяц -->
        <div class="birthdates">
          <h3 class="birthdates__header">События в этом месяце:</h3>
          <div @click="showEventsPopup = true, showMonthEvents = true, body.style.overflow = 'hidden'" v-if="monthEvents.length !== 0" v-for="event in monthEvents" class="events__item" style="cursor: pointer;">{{ event.name }}<div class="events__item-icon"><span class="right"></span></div></div>
          <p v-if="monthEvents.length === 0">Нет событий</p>
        </div>
      </div>

      <!-- Блок с днями рождения -->
      <div v-if="showBirthday" class="birthdays__block">
        <div class="birthdates">
          <h3 class="birthdates__header">{{ newDate }} день рождения отмечают:</h3>
          <div class="today" v-if="birthdayArr.length !== 0" v-for="birthday in birthdayArr">
              <div class="birthdays__fio"><b style="color: #fff;">{{ birthday.split('(')[0] }}</b></div>
              <div class="birthdays__job">({{ birthday.split('(')[1] }}</div>            </div>
          <p v-if="birthdayArr.length === 0">Нет событий</p>
        </div>

        <!-- Блок с днями рождения за месяц -->
        <div class="birthdates birthdates__per-month">
          <h3 class="birthdates__header">Именинники этого месяца:</h3>
          <div v-for="birthday in monthBirthdays.slice(0, 3)">
            <div v-for="item in birthday.birthdate" class="month__birthdays">
              <div class="birthdays__fio"><b>{{ item.split('(')[0] }}</b></div>
              <div class="birthdays__job">({{ item.split('(')[1]}}</div>
              <div v-if="activeMonth !== 'Май'" class="birtdays__date">{{ birthday.date }}<br>{{ activeMonth.slice(0,3).toLowerCase() + '.' }}</div>
              <div v-if="activeMonth === 'Май'" class="birtdays__date">{{ birthday.date }}<br>мая</div>
            </div>
          </div>
          <p v-if="monthBirthdays.length === 0">Нет событий</p>
        </div>
        <button v-if="monthBirthdays.length > 3" class="birthday__btn birthday__btn-month" @click="showBirthdayPopup = true, showMonthBirthdays = true, body.style.overflow = 'hidden'">Показать больше</button>
      </div>
      
    </div>
  </div>

    <!-- Попап с описанием -->
    <div v-show="showEventsPopup" class="overlay">
    <div class="overlay__inner">
      <div class="overlay__inner-popup">
        <div class="popup">
          <div @click="showEventsPopup = false, body.style.overflow = 'auto'" class="popup__close"></div>
          <h4 v-if="!showMonthEvents" class="popup__title">{{ newDate }}</h4>
          <h4 v-if="showMonthEvents" class="popup__title">События в этом месяце:</h4>
          <div class="popup__items">
            <div v-if="!showMonthEvents" class="events__elem" v-for="event in eventsArr">
                <div class="events__elem-header">
                  <h3>{{ event.name }}</h3>
                  <p v-if="event.desq && event.name !== 'Митап с руководителями ИТ Решений'">{{ event.desq }}</p>
                  <p v-if="event.desq && event.name === 'Митап с руководителями ИТ Решений'">{{ event.desq[0] }}<br><br>{{ event.desq[1] }}</p>
                  <div class="events__elem-bottom">
                    <a v-if="event.link" target="_blank" :href="event.link" class="events__elem-link">Подробнее</a>
                    <div class="events__elem-flex">
                      <div v-if="event.time" class="event__elem-time">{{ event.time }}</div>
                      <div v-if="event.location" class="event__elem-loc">{{ event.location }}</div>
                    </div>
                  </div>
                </div>
            </div>
            <div v-if="showMonthEvents" class="events__elem" v-for="event in monthEvents">
                <div class="events__elem-header">
                  <h3>{{ event.name }}</h3>
                  <p v-if="event.desq && event.name !== 'Митап с руководителями ИТ Решений'">{{ event.desq }}</p>
                  <p v-if="event.desq && event.name === 'Митап с руководителями ИТ Решений'">{{ event.desq[0] }}<br><br>{{ event.desq[1] }}</p>
                  <div class="events__elem-bottom">
                    <a v-if="event.link" target="_blank" :href="event.link" class="events__elem-link">Подробнее</a>
                    <div class="events__elem-flex">
                      <div v-if="event.time" class="event__elem-time">{{ event.time }}</div>
                      <div v-if="event.location" class="event__elem-loc">{{ event.location }}</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div v-if="showMonthBirthdays" class="popup__text-hide"></div>
        </div>
      </div>
    </div>
  </div>

    <!-- Попап с днями рождения -->
    <div v-show="showBirthdayPopup" class="overlay">
      <div class="overlay__inner">
        <div class="overlay__inner-popup">
          <div class="popup">
            <div @click="showBirthdayPopup = false, body.style.overflow = 'auto'" class="popup__close"></div>
            <h4 v-if="showMonthBirthdays" class="popup__title">Именинники этого месяца:</h4>
            <div v-if="showMonthBirthdays" class="popup__items">
              <div v-for="birthday in monthBirthdays">
                <div v-for="item in birthday.birthdate" class="month__birthdays">
                  <div class="birthdays__fio"><b>{{ item.split('(')[0] }}</b></div>
                  <div class="birthdays__job">({{ item.split('(')[1]}}</div>
                  <!-- <div class="birtdays__date">{{ birthday.date }}<br>{{ activeMonth.slice(0,3).toLowerCase() + '.' }}</div> -->
                  <div v-if="activeMonth !== 'Май'" class="birtdays__date">{{ birthday.date }}<br>{{ activeMonth.slice(0,3).toLowerCase() + '.' }}</div>
                  <div v-if="activeMonth === 'Май'" class="birtdays__date">{{ birthday.date }}<br>мая</div>
                </div>
              </div>
            </div>
            <div v-if="showMonthBirthdays" class="popup__text-hide"></div>
          </div>
        </div>
      </div>

  </div>
</template>

<style lang="scss">
.events__elem-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.events__elem-link {
  text-decoration: none;
  color: #0046b6;
  font-size: 14px;
}

.events__elem-flex {
  display: flex;
}

.event__elem-time {
  font-size: 12px;
  background-color: #f4f4f4;
  color: #0046b6;
  padding: 5px;
  margin-right: 10px;
  border-radius: 3px;
  webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
}

.event__elem-loc {
  font-size: 12px;
  background-color: #f4f4f4;
  color: #0046b6;
  padding: 5px;
  border-radius: 3px;
  webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
}

.events__elem {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
}

.popup__text-hide {
  position: relative;
  max-height:100px;
  height: 20px;
  margin-top: -20px;
}
.popup__text-hide::after {
    content:"";
    width: 100%;
    display:block;
    height:50px;
    position:absolute;
    left: 50%;
    bottom: -10px;
    border-radius: 10px;
    z-index: 1000;
    transform: translateX(-50%);
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff 75%)
}
.birthday__btn-month {
  width: 100%;
}

.birthdates__per-month {
    overflow: hidden;
    max-height: 240px;
    position: relative;
}

.birtdays__date {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  width: 35px;
  height: 35px;
  background-color: #f4f4f4;
  border-radius: 3px;

  font-size: 14px;
  font-weight: 400;
  text-align: center;

  -webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
}

.birthdays__fio {
    color: #000000;
    font-size: 16px;
    font-family: "Intro", Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
}

.birthdays__job {
  font-size: 14px;
}

.month__birthdays {
  position: relative;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 10px !important;
}
.today {
  background-color: #0046b6 !important;
  color: #fff !important;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px !important;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
}
.month__changer {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffff;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);

  cursor: pointer;

  transition: all .3s ease-in-out;
}

.month__changer--left:after {
  content: '';
	display: inline-block;
  margin-top: 10px;
  margin-left: 12px;
  width: 12px;
  height: 12px;
  border-top: 2px solid #0046b6;
  border-right: 2px solid #0046b6;
  -moz-transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
  transition: all .3s ease-in-out;
}

.month__changer--right:after {
  content: '';
	display: inline-block;
  margin-top: 10px;
  margin-left: 7px;
  width: 12px;
  height: 12px;
  border-top: 2px solid #0046b6;
  border-right: 2px solid #0046b6;
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  transition: all .3s ease-in-out;
}

.month__changer:hover {
  background-color: #0046b6;
}

.month__changer:hover.month__changer--right:after{
  border-top: 2px solid #fff;
  border-right: 2px solid #fff
}

.month__changer:hover.month__changer--left:after{
  border-top: 2px solid #fff;
  border-right: 2px solid #fff
}

.events__item {
  transition: all .2s ease-in-out;
}

.events__item .today {
  transition: all .2s ease-in-out;
  background-color: #0046b6 !important;
  color: #fff !important;
} 

.events__item:hover .events__item-icon > .right {
  background-color: #0046b6;
}

.events__item-icon {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 3%;
  z-index: 2000;
  transform: translateY(-50%);
  transition: all .2s ease-in-out;
}

.right {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #f4f4f4;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
transition: all .2s ease-in-out;
}

.right:after {
  content: '';
	display: inline-block;
  margin-top: 10px;
  margin-left: 7px;
  width: 12px;
  height: 12px;
  border-top: 2px solid #0046b6;
  border-right: 2px solid #0046b6;
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  transition: all .2s ease-in-out;
}

.events__item:hover .events__item-icon > .right::after {
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}

.overlay {
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;

  background-color: rgba(0,0,0,0.4);

  &__inner {
    width: 100%;
    height: 100%;
    position: relative;

    &-popup {
      width: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 100001;
      transform: translate3d(-50%, -50%, 0);

      background-color: #ffffff;
      border-radius: 10px;

      .popup {
        width: 100%;
        height: 100%;
        max-height: 480px;

        position: relative;

        &__close {
          position: absolute;
          right: 20px;
          top: 10px;
          width: 16px;
          height: 16px;
          opacity: 1;

          cursor: pointer;
        
        &:hover {
          opacity: 1;
        }
        &:before, &:after {
          position: absolute;
          left: 15px;
          content: ' ';
          height: 18px;
          width: 1px;
          background-color: #fff;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }

        }

        

        &__title {
          // text-transform: lowercase;
          color: #ffffff;
          background-color: #0046b6;
          font-size: 24px;
          font-weight: 700;
          -webkit-border-top-left-radius: 10px;
          -webkit-border-top-right-radius: 10px;
          -moz-border-radius-topleft: 10px;
          -moz-border-radius-topright: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          padding: 20px;
        }

        &__items {
          width: 100%;
          height: 100%;
          max-height: 400px;
          overflow: scroll;
          padding: 20px;
        }

        &__item {
          padding: 10px;
          border-radius: 10px;
          background-color: #f4f4f4;
          color: #000000;
          font-size: 20px;
          font-family: "Intro", Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;
          margin-bottom: 10px;
        }

        &__item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.events__item {
    position: relative;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    color: #000000;
    font-size: 18px;
    font-family: "Intro", Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 10px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
}
.weekend {
  background-color: #f4f4f4;
  border-radius: 50%;
}

.other__month {
  opacity: 0.2 !important;
}
.active__cat {
  opacity: 1 !important;
  font-weight: 700;
}

.active__cat::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  opacity: 1 !important;
  background-color: #0046b6;
  border-radius: 3px;
}

.active .calendar__dates-item-inner {
  border: 1px solid #0046b6;
  border-radius: 50%;
}

.current .calendar__dates-item-inner {
  border: 1px solid #ff0000;
  border-radius: 50%;
}
  .calendar__title {
    color: #0046b6;
    font-size: 42px;
    font-family: 'Intro',Arial,sans-serif;
    line-height: 1.55;
    font-weight: 700;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    text-transform: uppercase;
  }

  .calendar {
    width: 550px;
    height: auto;

    background-color: #ffffff;
    border-radius: 10px;

    padding: 20px;
    margin-bottom: 30px;

    -webkit-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);

    &__inner {
      width: 100%;
      height: 100%;
    }

    &__header {
      display: grid;
      gap: 15px;
      grid-template-columns: repeat(7, 1fr);

      margin-bottom: 20px;

      &-item {
        display: inline-block;
        text-align: center;

        color: #6e6e6e;
        font-size: 20px;
        font-family: 'Intro',Arial,sans-serif;
        line-height: 1.55;
        font-weight: 600;
        background-position: center center;
        border-color: transparent;
        border-style: solid;

      }
    }

    &__dates {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(7, 1fr);

      &-item {
        color: #000000;
        font-size: 18px;
        font-family: 'Intro',Arial,sans-serif;
        line-height: 1.4;
        font-weight: 400;
        border-width: 2px;
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3);

        cursor: pointer;

        position: relative;

        text-align: center;

        &-inner {
          width: 40px;
          height: 40px;


          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;

          margin: 0 auto;
          padding: 10px;
        }

        &-num {
          width: 16px;
          height: 16px;
          background-color: #0046b6;
          border-radius: 50%;
          color: #ffffff;
          font-size: 12px;
          position: absolute;
          top: -5%;
          right: 12%;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

  .birthdates {
    width: 450px;


    &__header {
      color: #1448b3;
      font-size: 20px;
      font-family: 'Intro',Arial,sans-serif;
      line-height: 1.55;
      font-weight: 700;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
    }

    p {
      color: #000000;
      font-size: 16px;
      font-family: 'Intro',Arial,sans-serif;
      line-height: 1.5;
      font-weight: 400;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
      margin: 0;
    }
  }

  .calendar__header-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .calendar__cat-block {
    width: 100%;
    padding: 0;
    display: flex;
  }

  .calendar__cat-item {
    font-size: 20px;
    color: #000000;
    font-weight: 400;
    margin-right: 30px;
    opacity: 0.5;

    list-style: none;
    cursor: pointer;
  }

  .calendar__cat-item::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: #0046b6;
    border-radius: 3px;
    opacity: 0;
    transition: all .2s ease-in-out;
  }

  .calendar__cat-item:hover::after {
    opacity: 1;
  }


  .birthday__btn {
    border: none;
    background-color: transparent;
    color: #1448b3;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    margin-top: 5px;
    cursor: pointer;
  }

  .birthdays__block {
    padding-top: 120px;
  }
</style>