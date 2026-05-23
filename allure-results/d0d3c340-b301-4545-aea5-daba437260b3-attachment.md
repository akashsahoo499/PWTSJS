# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginenv.spec.ts >> Using Environment
- Location: tests\loginenv.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*Dashboard/
Received string:  "http://orangehrm.qedgetech.com/symfony/web/index.php/dashboard"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "http://orangehrm.qedgetech.com/symfony/web/index.php/dashboard"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "OrangeHRM" [ref=e4] [cursor=pointer]:
        - /url: http://www.orangehrm.com/
        - img "OrangeHRM" [ref=e5]
      - link "Welcome Suresh" [ref=e6] [cursor=pointer]:
        - /url: "#"
      - img [ref=e9]
      - link [ref=e11] [cursor=pointer]:
        - /url: /symfony/web/index.php/help/help?label=dashboard_index
        - img [ref=e13]
      - button "Subscribe" [ref=e16]
      - button "Marketplace" [ref=e18]
      - generic:
        - generic:
          - generic "1"
    - list [ref=e20]:
      - listitem [ref=e21]:
        - link "Admin" [ref=e22] [cursor=pointer]:
          - /url: /symfony/web/index.php/admin/viewAdminModule
          - generic [ref=e23]: Admin
        - list [ref=e24]:
          - listitem [ref=e25]:
            - link "User Management" [ref=e26] [cursor=pointer]:
              - /url: "#"
            - list [ref=e27]:
              - listitem [ref=e28]:
                - link "Users" [ref=e29] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSystemUsers
          - listitem [ref=e30]:
            - link "Job" [ref=e31] [cursor=pointer]:
              - /url: "#"
            - list [ref=e32]:
              - listitem [ref=e33]:
                - link "Job Titles" [ref=e34] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewJobTitleList
              - listitem [ref=e35]:
                - link "Pay Grades" [ref=e36] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewPayGrades
              - listitem [ref=e37]:
                - link "Employment Status" [ref=e38] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/employmentStatus
              - listitem [ref=e39]:
                - link "Job Categories" [ref=e40] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/jobCategory
              - listitem [ref=e41]:
                - link "Work Shifts" [ref=e42] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/workShift
          - listitem [ref=e43]:
            - link "Organization" [ref=e44] [cursor=pointer]:
              - /url: "#"
            - list [ref=e45]:
              - listitem [ref=e46]:
                - link "General Information" [ref=e47] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewOrganizationGeneralInformation
              - listitem [ref=e48]:
                - link "Locations" [ref=e49] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLocations
              - listitem [ref=e50]:
                - link "Structure" [ref=e51] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewCompanyStructure
          - listitem [ref=e52]:
            - link "Qualifications" [ref=e53] [cursor=pointer]:
              - /url: "#"
            - list [ref=e54]:
              - listitem [ref=e55]:
                - link "Skills" [ref=e56] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSkills
              - listitem [ref=e57]:
                - link "Education" [ref=e58] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEducation
              - listitem [ref=e59]:
                - link "Licenses" [ref=e60] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLicenses
              - listitem [ref=e61]:
                - link "Languages" [ref=e62] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLanguages
              - listitem [ref=e63]:
                - link "Memberships" [ref=e64] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/membership
          - listitem [ref=e65]:
            - link "Nationalities" [ref=e66] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/nationality
          - listitem [ref=e67]:
            - link "Corporate Branding" [ref=e68] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/addTheme
          - listitem [ref=e69]:
            - link "Configuration" [ref=e70] [cursor=pointer]:
              - /url: "#"
            - list [ref=e71]:
              - listitem [ref=e72]:
                - link "Email Configuration" [ref=e73] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/listMailConfiguration
              - listitem [ref=e74]:
                - link "Email Subscriptions" [ref=e75] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEmailNotification
              - listitem [ref=e76]:
                - link "Localization" [ref=e77] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/localization
              - listitem [ref=e78]:
                - link "Language Packages" [ref=e79] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/languagePackage
              - listitem [ref=e80]:
                - link "Modules" [ref=e81] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewModules
              - listitem [ref=e82]:
                - link "Social Media Authentication" [ref=e83] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/openIdProvider
              - listitem [ref=e84]:
                - link "Register OAuth Client" [ref=e85] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/registerOAuthClient
      - listitem [ref=e86]:
        - link "PIM" [ref=e87] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewPimModule
          - generic [ref=e88]: PIM
        - list [ref=e89]:
          - listitem [ref=e90]:
            - link "Configuration" [ref=e91] [cursor=pointer]:
              - /url: "#"
            - list [ref=e92]:
              - listitem [ref=e93]:
                - link "Optional Fields" [ref=e94] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/configurePim
              - listitem [ref=e95]:
                - link "Custom Fields" [ref=e96] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/listCustomFields
              - listitem [ref=e97]:
                - link "Data Import" [ref=e98] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/pimCsvImport
              - listitem [ref=e99]:
                - link "Reporting Methods" [ref=e100] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewReportingMethods
              - listitem [ref=e101]:
                - link "Termination Reasons" [ref=e102] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewTerminationReasons
          - listitem [ref=e103]:
            - link "Employee List" [ref=e104] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/viewEmployeeList/reset/1
          - listitem [ref=e105]:
            - link "Add Employee" [ref=e106] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/addEmployee
          - listitem [ref=e107]:
            - link "Reports" [ref=e108] [cursor=pointer]:
              - /url: /symfony/web/index.php/core/viewDefinedPredefinedReports/reportGroup/3/reportType/PIM_DEFINED
      - listitem [ref=e109]:
        - link "Leave" [ref=e110] [cursor=pointer]:
          - /url: /symfony/web/index.php/leave/viewLeaveModule
          - generic [ref=e111]: Leave
        - list [ref=e112]:
          - listitem
      - listitem [ref=e113]:
        - link "Time" [ref=e114] [cursor=pointer]:
          - /url: /symfony/web/index.php/time/viewTimeModule
          - generic [ref=e115]: Time
        - list [ref=e116]:
          - listitem [ref=e117]:
            - link "Timesheets" [ref=e118] [cursor=pointer]:
              - /url: "#"
            - list [ref=e119]:
              - listitem [ref=e120]:
                - link "My Timesheets" [ref=e121] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/viewMyTimesheet
              - listitem [ref=e122]:
                - link "Employee Timesheets" [ref=e123] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/viewEmployeeTimesheet
          - listitem [ref=e124]:
            - link "Attendance" [ref=e125] [cursor=pointer]:
              - /url: "#"
            - list [ref=e126]:
              - listitem [ref=e127]:
                - link "My Records" [ref=e128] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/viewMyAttendanceRecord
              - listitem [ref=e129]:
                - link "Punch In/Out" [ref=e130] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/punchIn
              - listitem [ref=e131]:
                - link "Employee Records" [ref=e132] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/viewAttendanceRecord
              - listitem [ref=e133]:
                - link "Configuration" [ref=e134] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/configure
          - listitem [ref=e135]:
            - link "Reports" [ref=e136] [cursor=pointer]:
              - /url: "#"
            - list [ref=e137]:
              - listitem [ref=e138]:
                - link "Project Reports" [ref=e139] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayProjectReportCriteria?reportId=1
              - listitem [ref=e140]:
                - link "Employee Reports" [ref=e141] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayEmployeeReportCriteria?reportId=2
              - listitem [ref=e142]:
                - link "Attendance Summary" [ref=e143] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayAttendanceSummaryReportCriteria?reportId=4
          - listitem [ref=e144]:
            - link "Project Info" [ref=e145] [cursor=pointer]:
              - /url: "#"
            - list [ref=e146]:
              - listitem [ref=e147]:
                - link "Customers" [ref=e148] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewCustomers
              - listitem [ref=e149]:
                - link "Projects" [ref=e150] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewProjects
      - listitem [ref=e151]:
        - link "Recruitment" [ref=e152] [cursor=pointer]:
          - /url: /symfony/web/index.php/recruitment/viewRecruitmentModule
          - generic [ref=e153]: Recruitment
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "Candidates" [ref=e156] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewCandidates
          - listitem [ref=e157]:
            - link "Vacancies" [ref=e158] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewJobVacancy
      - listitem [ref=e159]:
        - link "My Info" [ref=e160] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewMyDetails
          - generic [ref=e161]: My Info
        - list [ref=e162]:
          - listitem
      - listitem [ref=e163]:
        - link "Performance" [ref=e164] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e165]: Performance
        - list [ref=e166]:
          - listitem [ref=e167]:
            - link "Configure" [ref=e168] [cursor=pointer]:
              - /url: "#"
            - list [ref=e169]:
              - listitem [ref=e170]:
                - link "KPIs" [ref=e171] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchKpi
              - listitem [ref=e172]:
                - link "Trackers" [ref=e173] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/addPerformanceTracker
          - listitem [ref=e174]:
            - link "Manage Reviews" [ref=e175] [cursor=pointer]:
              - /url: "#"
            - list [ref=e176]:
              - listitem [ref=e177]:
                - link "Manage Reviews" [ref=e178] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchPerformancReview
              - listitem [ref=e179]:
                - link "My Reviews" [ref=e180] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/myPerformanceReview
              - listitem [ref=e181]:
                - link "Review List" [ref=e182] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchEvaluatePerformancReview
          - listitem [ref=e183]:
            - link "My Trackers" [ref=e184] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewMyPerformanceTrackerList
          - listitem [ref=e185]:
            - link "Employee Trackers" [ref=e186] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewEmployeePerformanceTrackerList
      - listitem [ref=e187]:
        - link "Dashboard" [ref=e188] [cursor=pointer]:
          - /url: /symfony/web/index.php/dashboard
          - generic [ref=e189]: Dashboard
        - list [ref=e190]:
          - listitem
      - listitem [ref=e191]:
        - link "Directory" [ref=e192] [cursor=pointer]:
          - /url: /symfony/web/index.php/directory/viewDirectory/reset/1
          - generic [ref=e193]: Directory
        - list [ref=e194]:
          - listitem
      - listitem [ref=e195]:
        - link "Maintenance" [ref=e196] [cursor=pointer]:
          - /url: /symfony/web/index.php/maintenance/purgeEmployee
          - generic [ref=e197]: Maintenance
        - list [ref=e198]:
          - listitem [ref=e199]:
            - link "Purge Records" [ref=e200] [cursor=pointer]:
              - /url: "#"
            - list [ref=e201]:
              - listitem [ref=e202]:
                - link "Employee Records" [ref=e203] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeEmployee
              - listitem [ref=e204]:
                - link "Candidate Records" [ref=e205] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeCandidateData
          - listitem [ref=e206]:
            - link "Access Records" [ref=e207] [cursor=pointer]:
              - /url: /symfony/web/index.php/maintenance/accessEmployeeData
      - listitem [ref=e208]:
        - link "Buzz" [ref=e209] [cursor=pointer]:
          - /url: /symfony/web/index.php/buzz/viewBuzz
          - generic [ref=e210]: Buzz
        - list [ref=e211]:
          - listitem
    - generic [ref=e213]:
      - heading "Dashboard" [level=1] [ref=e215]
      - generic [ref=e216]:
        - group "Quick Launch" [ref=e221]:
          - generic [ref=e222]: Quick Launch
          - table [ref=e225]:
            - rowgroup [ref=e226]:
              - row "Assign Leave Leave List Timesheets Apply Leave My Leave My Timesheet" [ref=e227]:
                - cell "Assign Leave" [ref=e228]:
                  - link "Assign Leave" [ref=e230] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/assignLeave
                    - img [ref=e231]
                    - generic [ref=e232]: Assign Leave
                - cell "Leave List" [ref=e233]:
                  - link "Leave List" [ref=e235] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/viewLeaveList
                    - img [ref=e236]
                    - generic [ref=e237]: Leave List
                - cell "Timesheets" [ref=e238]:
                  - link "Timesheets" [ref=e240] [cursor=pointer]:
                    - /url: /symfony/web/index.php/time/viewEmployeeTimesheet
                    - img [ref=e241]
                    - generic [ref=e242]: Timesheets
                - cell "Apply Leave" [ref=e243]:
                  - link "Apply Leave" [ref=e245] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/applyLeave
                    - img [ref=e246]
                    - generic [ref=e247]: Apply Leave
                - cell "My Leave" [ref=e248]:
                  - link "My Leave" [ref=e250] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/viewMyLeaveList
                    - img [ref=e251]
                    - generic [ref=e252]: My Leave
                - cell "My Timesheet" [ref=e253]:
                  - link "My Timesheet" [ref=e255] [cursor=pointer]:
                    - /url: /symfony/web/index.php/time/viewMyTimesheet
                    - img [ref=e256]
                    - generic [ref=e257]: My Timesheet
        - generic [ref=e260]:
          - group "Employee Distribution by Subunit" [ref=e262]:
            - generic [ref=e263]: Employee Distribution by Subunit
            - generic [ref=e269]: 100%
          - group "Legend" [ref=e271]:
            - generic [ref=e272]: Legend
            - table [ref=e274]:
              - rowgroup [ref=e275]:
                - row "Not assigned to Subunits" [ref=e276]:
                  - cell [ref=e277]
                  - cell "Not assigned to Subunits" [ref=e280]
          - group "Pending Leave Requests" [ref=e282]:
            - generic [ref=e283]: Pending Leave Requests
            - generic [ref=e285]:
              - table [ref=e287]:
                - rowgroup [ref=e288]:
                  - row "No Records are Available" [ref=e289]:
                    - cell "No Records are Available" [ref=e290]
              - table [ref=e292]:
                - rowgroup [ref=e293]:
                  - 'row "3 month(s) Total : 0 / 0" [ref=e294]':
                    - cell "3 month(s)" [ref=e295] [cursor=pointer]
                    - 'cell "Total : 0 / 0" [ref=e296]'
  - generic [ref=e297]:
    - text: OrangeHRM 4.10.1
    - text: © 2005 - 2026
    - link "OrangeHRM, Inc" [ref=e298] [cursor=pointer]:
      - /url: http://www.orangehrm.com
    - text: . All rights reserved.
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | test('Using Environment',async({page})=>{
  4  |     await page.goto(process.env.Base_Url!)
  5  |     await page.waitForTimeout(2000)
  6  |     await page.locator(process.env.user_Loc!).fill(process.env.User_name!)
  7  |     await page.locator(process.env.pass_Loc!).fill(process.env.Pass_Word!)
  8  |     await page.locator(process.env.Login_btn!).click()
  9  |     //verify successful login
> 10 |     await expect(page).toHaveURL(/.*Dashboard/)
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  11 | })
```