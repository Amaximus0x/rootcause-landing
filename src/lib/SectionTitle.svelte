<script lang="ts">
	export let title: string;
	export let size: 'small' | 'large' = 'large';
</script>

<div class="section-title" class:small={size === 'small'} class:large={size === 'large'}>
	{title}
</div>

<style>
.section-title {
    align-self: stretch;
    text-align: center;
    justify-content: flex-start;
    color: black;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    word-wrap: break-word;
}

.section-title.small {
    font-size: 24px;
    line-height: 36px;
}

.section-title.large {
    font-size: 36px;
    line-height: 44px;
}

/* Mobile responsive styles */
@media (max-width: 768px) {
    .section-title.small {
        font-size: 20px;
        line-height: 32px;
    }
    
    .section-title.large {
        font-size: 28px;
        line-height: 36px;
    }
}

@media (max-width: 480px) {
    .section-title.small {
        font-size: 18px;
        line-height: 28px;
    }
    
    .section-title.large {
        font-size: 24px;
        line-height: 32px;
    }
}
</style> 