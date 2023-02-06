<template>
    <ParentLayout>
        <template #page-bottom>
            <div class="layout_footer">
                <div>
                    «SaintPlace» © 2022-2023 | Есть вопросы? Напишите нам на <a href="mailto:info@saint-place.ru">info@saint-place.ru</a>.
                </div>
            </div>
        </template>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
    name: 'Layout',
    components: {
        ParentLayout
    }
};
</script>

<style>
.layout_footer {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
}
</style>