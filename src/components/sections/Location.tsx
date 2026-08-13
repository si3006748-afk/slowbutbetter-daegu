import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'
import { FadeInSection } from '../common/FadeInSection'

export function Location() {
  const { location } = cafeConfig
  const { mapProvider, coordinates } = location

  return (
    <section id="location" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeInSection>
          <div className="text-center">
            <h2 className="font-main text-3xl font-bold text-primary md:text-4xl">
              오시는 길
            </h2>
            <p className="mt-3 text-surface-text/70">언제든지 편하게 방문해 주세요</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-medium text-primary">주소</h3>
                  <p className="mt-1 text-surface-text/80">{location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-medium text-primary">전화</h3>
                  <a
                    href={`tel:${location.phone}`}
                    className="mt-1 text-surface-text/80 hover:text-primary"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-medium text-primary">이메일</h3>
                  <a
                    href={`mailto:${location.email}`}
                    className="mt-1 text-surface-text/80 hover:text-primary"
                  >
                    {location.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-medium text-primary">영업시간</h3>
                  <ul className="mt-1 space-y-1 text-surface-text/80">
                    {location.businessHours.map((schedule) => (
                      <li key={schedule.day}>
                        <span className="font-medium">{schedule.day}</span>{' '}
                        {schedule.hours}
                      </li>
                    ))}
                  </ul>
                  {location.closedDays && location.closedDays.length > 0 && (
                    <p className="mt-2 text-surface-text/80">
                      <span className="font-medium">휴무일</span>{' '}
                      {location.closedDays.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/*
              ============================================================
              지도 API 연동 가이드
              ============================================================

              1. cafeConfig.ts에서 mapProvider를 "naver" 또는 "kakao"로 설정

              2. index.html의 <head> 또는 </body> 직전에 SDK 스크립트 추가:

              [카카오맵]
              <script
                type="text/javascript"
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY&autoload=false"
              ></script>

              [네이버맵]
              <script
                type="text/javascript"
                src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_NAVER_CLIENT_ID"
              ></script>

              3. 아래 Placeholder div(id="map-container")를 실제 지도 컴포넌트로 교체
                 - React useEffect 내에서 SDK 초기화
                 - coordinates.lat / coordinates.lng 값 사용
                 - mapProvider 값에 따라 분기 처리

              4. SDK 로드 후 예시 (카카오맵):
                 kakao.maps.load(() => {
                   const container = document.getElementById('map-container')
                   const options = {
                     center: new kakao.maps.LatLng(lat, lng),
                     level: 3,
                   }
                   new kakao.maps.Map(container, options)
                 })

              5. SDK 로드 후 예시 (네이버맵):
                 const map = new naver.maps.Map('map-container', {
                   center: new naver.maps.LatLng(lat, lng),
                   zoom: 15,
                 })
            */}
            <div
              id="map-container"
              className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-secondary/40 bg-white shadow-md"
            >
              {mapProvider === 'kakao' && (
                <div className="p-8 text-center">
                  <p className="font-main text-lg font-semibold text-primary">
                    카카오맵 Placeholder
                  </p>
                  <p className="mt-2 text-sm text-surface-text/60">
                    mapProvider: kakao
                  </p>
                  {coordinates && (
                    <p className="mt-1 text-xs text-surface-text/50">
                      {coordinates.lat}, {coordinates.lng}
                    </p>
                  )}
                  <p className="mt-4 text-xs text-surface-text/40">
                    index.html에 카카오맵 SDK를 추가한 뒤 이 영역을 지도로 교체하세요
                  </p>
                </div>
              )}

              {mapProvider === 'naver' && (
                <div className="p-8 text-center">
                  <p className="font-main text-lg font-semibold text-primary">
                    네이버맵 Placeholder
                  </p>
                  <p className="mt-2 text-sm text-surface-text/60">
                    mapProvider: naver
                  </p>
                  {coordinates && (
                    <p className="mt-1 text-xs text-surface-text/50">
                      {coordinates.lat}, {coordinates.lng}
                    </p>
                  )}
                  <p className="mt-4 text-xs text-surface-text/40">
                    index.html에 네이버맵 SDK를 추가한 뒤 이 영역을 지도로 교체하세요
                  </p>
                </div>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
