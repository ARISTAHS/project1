<template>
  <div id="app">
    <div class="contentarea">
      
      <MainVisual />
      <section class="about">
          <h2><i class="fa-brands fa-guilded"></i>소개</h2>
          <ul class="tex">
            <li>
              <p>'서울시 공공서비스 예약' 서비스는 서울시와 산하기관, 그리고 25개 자치구에서 제공하는 공공 서비스를 온라인으로 예약 및 결제하는 통합 플랫폼입니다. 올해 3월 개편을 통해서 축구장, 테니스장 등 체육시설 이용부터 캠핑장 등의 시설 대관, 그리고 교육강좌와 문화행사, 진료 등의 5개 분야에서 총 7,152여 개의 공공서비스를 예약 및 이용하실 수 있습니다. 더욱이 이번 개편을 통해 모바일 카카오톡 챗봇인 '서울톡' 활용한 예약과 상담이 개시되어 접근성이 강화되었고, 이전과 달리 이제는 네이버 아이디와 카카오 아이디를 통해 로그인하여 예약을 할 수 있게 되어 이용의 편리성도 향상시켰습니다.</p>

              <a class="more" href="../components/Sub1Content.vue"><i class="fa-light fa-hand-point-right"></i>view more</a>
            </li>
            <li>
              <img src="../assets/round.png" alt="...">
            </li>
          </ul>

        <ul>
          <li> 
            <img src="../assets/about1.jpg" alt="...">
          </li>
          <li> 
            <img src="../assets/about2.jpg" alt="...">
          </li>
          <li> 
            <img src="../assets/about3.jpg" alt="...">
          </li>
        </ul>
      </section>

      <section class="midimg">
        <div class="img"></div>
      </section>

      <section class="calendar">
        <h2><i class="fa-solid fa-calendar-days"></i>일정 안내</h2>
        <p> <strong>서울시 12월 공공서비스 일정을 안내해드립니다.</strong> </p>
        <a class="more" href="../components/Sub2Content.vue"><i class="fa-light fa-hand-point-right"></i>view more</a>
        <v-app id="inspire">
          <div>
              <v-sheet
                tile
                height="54"
                class="d-flex"
              >
                <v-btn
                  icon
                  class="ma-2"
                  @click="$refs.calendar.prev()"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-select
                  v-model="type"
                  :items="types"
                  dense
                  outlined
                  hide-details
                  class="ma-2"
                  label="type"
                ></v-select>
                <v-select
                  v-model="mode"
                  :items="modes"
                  dense
                  outlined
                  hide-details
                  label="event-overlap-mode"
                  class="ma-2"
                ></v-select>
                <v-select
                  v-model="weekday"
                  :items="weekdays"
                  dense
                  outlined
                  hide-details
                  label="weekdays"
                  class="ma-2"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  class="ma-2"
                  @click="$refs.calendar.next()"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-sheet>
              <v-sheet height="600">
                <v-calendar
                  ref="calendar"
                  v-model="value"
                  :weekdays="weekday"
                  :type="type"
                  :events="events"
                  :event-overlap-mode="mode"
                  :event-overlap-threshold="30"
                  :event-color="getEventColor"
                  @change="getEvents"
                ></v-calendar>
              </v-sheet>
            </div>
        </v-app>

      </section>

    </div>

  </div>
</template>

<style>

.contentarea{width: 90%; margin: 0 auto; box-sizing: border-box;
     }
.contentarea section{margin-top: 100px;}
.contentarea section h2{font-weight: 700; font-size: 2.3em; text-align: center; color: #000;}
.contentarea section h2 i{font-size: larger; padding-right: 10px;}
.contentarea section .more{display: inline-block; font-size: 1.1em; font-weight: 500;color: #666; border: 1px solid #03509f; padding: 10px;}
.contentarea section .more i{font-family: 'fontawesome'; padding-right: 7px;}
.contentarea .about{background: #f8f8f8; padding: 20px;}
.contentarea .about h2{display: inline-block; padding: 2% 0;}
.contentarea .about p{ font-size: 1.3em; text-align: left; padding: 0 2.5rem; margin-bottom: 5%;  color: #666;}
.contentarea .about ul{overflow: hidden; display: flex; gap: 1.5em;}
.contentarea .about ul li{width: 33.33%;}
.contentarea .about ul li img{width: 100%; border-radius: 50%;}
.contentarea .about .tex{gap: 2em; width: 70%; margin: 0 auto 5%;}
.contentarea .about .tex li{width: 50%;}
.contentarea .about .tex li img{width: 100%; border-radius: 20%;}

.contentarea .calendar{text-align: center; overflow: hidden; position: relative; margin-bottom: 100px; padding: 2% 0 2% 5% ;}
.contentarea .calendar h2{padding: 1.5% 0 1.5% 5%; text-align: left;}
.contentarea .calendar p{font-size: 1.5em; padding: 2rem; color: #666; border-top: 1px solid;}
.contentarea .calendar .v-application--wrap{min-height: auto;}
.contentarea .calendar .theme--light.v-application{padding: 2.5rem; border: 3px solid #ccc;}
.contentarea .calendar .more{position: absolute; top: 18px; right: 0; }

.contentarea .midimg .img{background: url(../assets/midimg1.jpg) no-repeat; position: relative; height: 350px; background-position: 50% 50%; background-size: cover; background-attachment: fixed; width: 1000%; margin-left: -1000px;}


</style>

<script>
import MainVisual from '../components/MainVisual.vue'

  export default {
    components:{
      MainVisual
    },
    data: () => ({
      type: 'month',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['환경챌린지 교강', '실내 체육 대관', '서울시 영화 제작 특강', '한강 드론장', '실외 체육수업', '서울시 청계천 박물관', '서울시 공동체마을밥상 ', '서울 역사박물관 단체관람'],
    }),
    methods: {
      getEvents ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
    
    
  }
  
</script>
