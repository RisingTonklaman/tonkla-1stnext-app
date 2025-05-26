'use client';

export class ChargeController {
  constructor(router) {
    this.router = router;
  }

  startCharging() {
    // logic อื่น ๆ ที่คุณอยากเพิ่มไว้ตรงนี้ เช่น บันทึก log
    this.router.push('/login');
  }
}
