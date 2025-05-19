from datetime import datetime, timedelta

def generate_custom_plan(subjects, exam_date_str):
    today = datetime.now().date()
    exam_date = datetime.strptime(exam_date_str, "%Y-%m-%d").date()

    total_days = (exam_date - today).days
    if total_days <= 0:
        return []

    time_slots = ["Morning", "Afternoon", "Evening"]
    total_slots = total_days * len(time_slots)

    # Step 1: Prepare study items
    study_items = []
    for subject in subjects:
        chapters_to_study = int(round(subject["chapters"] * (1 - subject["knowledge"] / 100)))
        for ch_num in range(1, chapters_to_study + 1):
            study_items.append({
                "subject": subject["name"],
                "chapter": f"Chapter {ch_num}"
            })

    # Step 2: Distribute study items to available slots
    plan = []
    index = 0
    for day_offset in range(total_days):
        current_date = today + timedelta(days=day_offset)
        for slot in time_slots:
            if index >= len(study_items):
                break
            item = study_items[index]
            plan.append({
                "date": current_date.strftime("%Y-%m-%d"),
                "time_slot": slot,
                "subject": item["subject"],
                "chapter": item["chapter"]
            })
            index += 1
        if index >= len(study_items):
            break

    return plan
